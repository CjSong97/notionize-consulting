import { Client } from "@notionhq/client";
import { 
  PageObjectResponse,
  BlockObjectResponse,
  TitlePropertyItemObjectResponse,
  RichTextPropertyItemObjectResponse,
  FormulaPropertyItemObjectResponse,
  StatusPropertyItemObjectResponse,
  MultiSelectPropertyItemObjectResponse,
  PeoplePropertyItemObjectResponse
} from "@notionhq/client/build/src/api-endpoints";
import { BlogPost } from "@/types/post";

// Initialize Notion client
const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID as string;

/**
 * Get all published blog posts from Notion
 */
export async function getAllPosts(): Promise<BlogPost[]> {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Status",
      status: {
        equals: "Published",
      },
    },
    sorts: [
      {
        property: "publishDate",
        direction: "descending",
      },
    ],
  });

  return response.results
    .filter((page): page is PageObjectResponse => 
      page.object === "page" && "properties" in page
    )
    .map((page): BlogPost | null => {
      try {
        const props = page.properties;
        
        // Extract properties with proper type checking
        const title = getTitle(props.Title);
        const description = getRichText(props.Description);
        const slug = getFormulaString(props.slug);
        const publishDate = getFormulaString(props.publishDate);
        const status = getStatus(props.Status);
        const tags = getMultiSelect(props.Tags);
        const author = getPeople(props.Author);
        
        return {
          id: page.id,
          title,
          description,
          slug,
          publishDate,
          status,
          tags,
          author,
          url: page.url || "",
          cover: getCoverImage(page),
        };
      } catch (error) {
        console.error(`Failed to process page ${page.id}:`, error);
        return null;
      }
    })
    .filter(Boolean) as BlogPost[];
}

/**
 * Get a single post by slug
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "slug",
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });

  const page = response.results[0] as PageObjectResponse | undefined;
  if (!page || page.object !== "page" || !("properties" in page)) return null;

  try {
    const props = page.properties;
    
    // Extract properties with proper type checking
    const title = getTitle(props.Title);
    const description = getRichText(props.Description);
    const formulaSlug = getFormulaString(props.slug);
    const publishDate = getFormulaString(props.publishDate);
    const status = getStatus(props.Status);
    const tags = getMultiSelect(props.Tags);
    const author = getPeople(props.Author);

    return {
      id: page.id,
      title,
      description,
      slug: formulaSlug,
      publishDate,
      status,
      tags,
      author,
      url: page.url || "",
      cover: getCoverImage(page),
    };
  } catch (error) {
    console.error(`Failed to process page for slug ${slug}:`, error);
    return null;
  }
}

/**
 * Get all content blocks for a post
 */
export async function getPostContent(pageId: string): Promise<BlockObjectResponse[]> {
  const blocks: BlockObjectResponse[] = [];
  let cursor: string | undefined | null = undefined;

  do {
    const response = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: cursor || undefined,
    });
    
    blocks.push(...(response.results as BlockObjectResponse[]));
    cursor = response.has_more ? response.next_cursor : null;
  } while (cursor);

  return blocks;
}

// Property extraction functions with proper type handling

function getTitle(property: unknown): string {
  if (!property || typeof property !== 'object') return "";
  
  const titleProp = property as TitlePropertyItemObjectResponse;
  if (titleProp.type !== 'title' || !Array.isArray(titleProp.title)) return "";
  
  return titleProp.title.map(item => item.plain_text).join("");
}

function getRichText(property: unknown): string {
  if (!property || typeof property !== 'object') return "";
  
  const richTextProp = property as RichTextPropertyItemObjectResponse;
  if (richTextProp.type !== 'rich_text' || !Array.isArray(richTextProp.rich_text)) return "";
  
  return richTextProp.rich_text.map(item => item.plain_text).join("");
}

function getFormulaString(property: unknown): string {
  if (!property || typeof property !== 'object') return "";
  
  const formulaProp = property as FormulaPropertyItemObjectResponse;
  if (formulaProp.type !== 'formula') return "";
  
  return formulaProp.formula.type === 'string' ? formulaProp.formula.string || "" : "";
}

function getStatus(property: unknown): string {
  if (!property || typeof property !== 'object') return "";
  
  const statusProp = property as StatusPropertyItemObjectResponse;
  if (statusProp.type !== 'status' || !statusProp.status) return "";
  
  return statusProp.status.name || "";
}

function getMultiSelect(property: unknown): string[] {
  if (!property || typeof property !== 'object') return [];
  
  const multiSelectProp = property as MultiSelectPropertyItemObjectResponse;
  if (multiSelectProp.type !== 'multi_select' || !Array.isArray(multiSelectProp.multi_select)) return [];
  
  return multiSelectProp.multi_select.map(item => item.name);
}

function getPeople(property: unknown): string[] {
  if (!property || typeof property !== 'object') return [];
  
  const peopleProp = property as PeoplePropertyItemObjectResponse;
  if (peopleProp.type !== 'people' || !Array.isArray(peopleProp.people)) return [];
  
  return peopleProp.people.map(person => person.name || "");
}

/**
 * Helper function to get cover image URL from page
 */
function getCoverImage(page: PageObjectResponse): string {
  if (!page.cover) return "";
  
  if (page.cover.type === "external") {
    return page.cover.external.url;
  } else if (page.cover.type === "file") {
    return page.cover.file.url;
  }
  
  return "";
}
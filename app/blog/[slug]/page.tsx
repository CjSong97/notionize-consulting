// app/blog/[slug]/page.tsx
import { getPostBySlug, getPostContent } from "@/lib/notion";
import { notFound } from "next/navigation";
import { BlogPost } from "@/types/post";
import Image from "next/image";
import { renderNotionBlocks } from "@/components/renderNotionBlocks"; // You’ll create this next

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const {slug} = await params
  const post: BlogPost | null = await getPostBySlug(slug);

  if (!post) return notFound();

  const blocks = await getPostContent(post.id);

  return (
    <main className="px-6 py-12 lg:px-48">
      <article className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-primary dark:text-white mb-4">
          {post.title}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {post.publishDate} · {post.author.join(", ")}
        </p>

        <div className="relative w-full h-72 rounded-xl overflow-hidden mb-8">
          <Image
            src={post?.cover?.external?.url || "/default-cover.jpg"}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
          {post.description}
        </p>

        <div className="mt-8">
          <strong className="text-primary dark:text-white">Tags:</strong>{" "}
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div>{renderNotionBlocks(blocks)}</div>
      </article>
    </main>
  );
}

// app/blog/[slug]/page.tsx
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const {slug} = await params
    const post = await getPostBySlug(slug); // ✅ await is required
  
    if (!post) {
      return {
        title: "Post Not Found | Notionize Blog",
      };
    }
  
    return {
      title: `${post.title} | Notionize Blog`,
      description: post.description,
    };
  }
  
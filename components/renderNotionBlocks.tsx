// components/renderNotionBlocks.tsx

import { ReactNode } from 'react';
import { 
  BlockObjectResponse, 
  RichTextItemResponse,
  ParagraphBlockObjectResponse,
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  BulletedListItemBlockObjectResponse,
  NumberedListItemBlockObjectResponse,
  ImageBlockObjectResponse
} from '@notionhq/client/build/src/api-endpoints';
import Image from 'next/image';

type BlockTypes = 
  | 'paragraph'
  | 'heading_1'
  | 'heading_2'
  | 'bulleted_list_item'
  | 'numbered_list_item'
  | 'image';

export function renderNotionBlocks(blocks: BlockObjectResponse[]): ReactNode[] {
  return blocks.map((block) => {
    const { id, type } = block;
    
    // Type guard to check if the block type is one we can handle
    if (!isHandledBlockType(type)) return null;
    
    switch (type) {
      case 'paragraph': {
        const paragraphBlock = block as ParagraphBlockObjectResponse;
        return (
          <p key={id} className="mb-4">
            {renderRichText(paragraphBlock.paragraph.rich_text)}
          </p>
        );
      }
      case 'heading_1': {
        const headingBlock = block as Heading1BlockObjectResponse;
        return (
          <h1 key={id} className="text-3xl font-bold mt-8 mb-4">
            {renderRichText(headingBlock.heading_1.rich_text)}
          </h1>
        );
      }
      case 'heading_2': {
        const headingBlock = block as Heading2BlockObjectResponse;
        return (
          <h2 key={id} className="text-2xl font-semibold mt-6 mb-3">
            {renderRichText(headingBlock.heading_2.rich_text)}
          </h2>
        );
      }
      case 'bulleted_list_item': {
        const bulletBlock = block as BulletedListItemBlockObjectResponse;
        return (
          <li key={id} className="list-disc ml-6">
            {renderRichText(bulletBlock.bulleted_list_item.rich_text)}
          </li>
        );
      }
      case 'numbered_list_item': {
        const numberedBlock = block as NumberedListItemBlockObjectResponse;
        return (
          <li key={id} className="list-decimal ml-6">
            {renderRichText(numberedBlock.numbered_list_item.rich_text)}
          </li>
        );
      }
      case 'image': {
        const imageBlock = block as ImageBlockObjectResponse;
        const imageSource = imageBlock.image.type === 'external' 
          ? imageBlock.image.external.url 
          : imageBlock.image.file.url;
        
        return (
          <Image
            key={id}
            src={imageSource}
            alt={imageBlock.image.caption.length > 0 
              ? imageBlock.image.caption[0].plain_text 
              : "Notion image"}
            className="my-6 w-full rounded-xl"
          />
        );
      }
      default:
        return null;
    }
  });
}

// Helper function to render rich text
function renderRichText(richTextItems: RichTextItemResponse[]): ReactNode[] {
  return richTextItems.map((text, i) => (
    <span key={i}>{text.plain_text}</span>
  ));
}

// Type guard to check if block type is one we can handle
function isHandledBlockType(type: string): type is BlockTypes {
  return [
    'paragraph',
    'heading_1',
    'heading_2',
    'bulleted_list_item',
    'numbered_list_item',
    'image'
  ].includes(type);
}

export interface HeadingBlock {
  type: 'heading';
  level: number;
  text: string;
}

export interface ParagraphBlock {
  type: 'paragraph';
  text: string;
}

export interface ListBlock {
  type: 'ul' | 'ol';
  items: string[];
}

export interface BlockquoteBlock {
  type: 'blockquote';
  lines: string[];
}

export interface TableBlock {
  type: 'table';
  headers: string[];
  rows: string[][];
}

export type Block = HeadingBlock | ParagraphBlock | ListBlock | BlockquoteBlock | TableBlock;

export function parseMarkdownBlocks(markdown: string): Block[] {
  const lines = markdown.split('\n');
  const blocks: Block[] = [];
  let currentBlock: Block | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      if (currentBlock) {
        blocks.push(currentBlock);
        currentBlock = null;
      }
      continue;
    }

    // Heading ## or ###
    if (trimmed.startsWith('## ') || trimmed.startsWith('### ')) {
      if (currentBlock) {
        blocks.push(currentBlock);
        currentBlock = null;
      }
      const level = trimmed.startsWith('### ') ? 3 : 2;
      const text = trimmed.replace(/^#{2,3}\s*/, '');
      blocks.push({ type: 'heading', level, text });
      continue;
    }

    // Blockquote >
    if (trimmed.startsWith('> ')) {
      if (currentBlock && currentBlock.type !== 'blockquote') {
        blocks.push(currentBlock);
        currentBlock = null;
      }
      if (!currentBlock) {
        currentBlock = { type: 'blockquote', lines: [] };
      }
      (currentBlock as BlockquoteBlock).lines.push(trimmed.replace(/^>\s*/, ''));
      continue;
    }

    // Unordered List - or *
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      if (currentBlock && currentBlock.type !== 'ul') {
        blocks.push(currentBlock);
        currentBlock = null;
      }
      if (!currentBlock) {
        currentBlock = { type: 'ul', items: [] };
      }
      (currentBlock as ListBlock).items.push(trimmed.replace(/^[-*]\s*/, ''));
      continue;
    }

    // Ordered List 1. 2.
    if (/^\d+\.\s/.test(trimmed)) {
      if (currentBlock && currentBlock.type !== 'ol') {
        blocks.push(currentBlock);
        currentBlock = null;
      }
      if (!currentBlock) {
        currentBlock = { type: 'ol', items: [] };
      }
      (currentBlock as ListBlock).items.push(trimmed.replace(/^\d+\.\s*/, ''));
      continue;
    }

    // Table rows | col | col |
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      const isDelimiter = /^\|[\s-:|]+\|$/.test(trimmed);
      if (isDelimiter) {
        continue; // skip |---|---| delimiter lines
      }

      const cells = trimmed
        .slice(1, -1)
        .split('|')
        .map((c) => c.trim());

      if (currentBlock && currentBlock.type !== 'table') {
        blocks.push(currentBlock);
        currentBlock = null;
      }

      if (!currentBlock) {
        currentBlock = { type: 'table', headers: cells, rows: [] };
      } else {
        (currentBlock as TableBlock).rows.push(cells);
      }
      continue;
    }

    // Paragraph
    if (currentBlock && currentBlock.type !== 'paragraph') {
      blocks.push(currentBlock);
      currentBlock = null;
    }

    if (!currentBlock) {
      currentBlock = { type: 'paragraph', text: trimmed };
    } else {
      (currentBlock as ParagraphBlock).text += ' ' + trimmed;
    }
  }

  if (currentBlock) {
    blocks.push(currentBlock);
  }

  return blocks;
}

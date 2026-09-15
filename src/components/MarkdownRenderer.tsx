import React from 'react';
import { parseMarkdownBlocks } from '../utils/markdownParser.ts';

interface MarkdownRendererProps {
  content: string;
}

function renderInline(text: string): React.ReactNode {
  // Simple token regex for **bold**, *italic*, and `code`
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
  let lastIdx = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIdx) {
      parts.push(text.substring(lastIdx, match.index));
    }
    const token = match[0];
    if (token.startsWith('**') && token.endsWith('**')) {
      parts.push(
        <strong key={match.index} className="font-bold text-slate-900 dark:text-zinc-100">
          {token.slice(2, -2)}
        </strong>
      );
    } else if (token.startsWith('*') && token.endsWith('*')) {
      parts.push(
        <em key={match.index} className="italic">
          {token.slice(1, -1)}
        </em>
      );
    } else if (token.startsWith('`') && token.endsWith('`')) {
      parts.push(
        <code
          key={match.index}
          className="bg-slate-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-sm font-mono text-amber-600 dark:text-amber-400"
        >
          {token.slice(1, -1)}
        </code>
      );
    }
    lastIdx = regex.lastIndex;
  }

  if (lastIdx < text.length) {
    parts.push(text.substring(lastIdx));
  }

  return parts.length === 1 ? parts[0] : parts;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const blocks = parseMarkdownBlocks(content);

  return (
    <div className="lesson-content text-slate-700 dark:text-zinc-300 leading-relaxed text-[1.05rem] space-y-4">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case 'heading':
            if (block.level === 3) {
              return (
                <h3
                  key={idx}
                  className="font-heading font-bold text-xl text-slate-800 dark:text-zinc-100 mt-6 mb-2"
                >
                  {renderInline(block.text)}
                </h3>
              );
            }
            return (
              <h2
                key={idx}
                className="font-heading font-extrabold text-2xl text-slate-800 dark:text-zinc-100 mt-8 mb-3"
              >
                {renderInline(block.text)}
              </h2>
            );

          case 'paragraph':
            return (
              <p key={idx} className="mb-4 leading-relaxed">
                {renderInline(block.text)}
              </p>
            );

          case 'blockquote':
            return (
              <blockquote
                key={idx}
                className="border-l-4 border-amber-400 bg-amber-50/60 dark:bg-amber-500/10 p-4 rounded-r-xl italic my-4 text-slate-800 dark:text-zinc-200"
              >
                {block.lines.map((line, lIdx) => (
                  <p key={lIdx} className="mb-1 last:mb-0">
                    {renderInline(line)}
                  </p>
                ))}
              </blockquote>
            );

          case 'ul':
            return (
              <ul key={idx} className="list-disc pl-6 space-y-2 mb-4">
                {block.items.map((item, iIdx) => (
                  <li key={iIdx}>{renderInline(item)}</li>
                ))}
              </ul>
            );

          case 'ol':
            return (
              <ol key={idx} className="list-decimal pl-6 space-y-2 mb-4">
                {block.items.map((item, iIdx) => (
                  <li key={iIdx}>{renderInline(item)}</li>
                ))}
              </ol>
            );

          case 'table':
            return (
              <div key={idx} className="my-6 overflow-x-auto rounded-2xl border border-slate-200 dark:border-zinc-700">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-zinc-800 border-b border-slate-200 dark:border-zinc-700">
                      {block.headers.map((h, hIdx) => (
                        <th key={hIdx} className="p-3 font-heading font-bold text-slate-800 dark:text-zinc-100">
                          {renderInline(h)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-zinc-800">
                    {block.rows.map((row, rIdx) => (
                      <tr
                        key={rIdx}
                        className="hover:bg-slate-50/50 dark:hover:bg-zinc-800/50 transition-colors"
                      >
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="p-3 text-slate-700 dark:text-zinc-300">
                            {renderInline(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}

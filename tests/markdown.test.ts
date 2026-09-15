import test, { describe } from 'node:test';
import assert from 'node:assert/strict';
import { parseMarkdownBlocks } from '../src/utils/markdownParser.ts';

describe('MarkdownRenderer - parseMarkdownBlocks', () => {
  test('should separate headings from following paragraphs even with single newline', () => {
    const input = '## Background\nA **discount** means paying less.';
    const blocks = parseMarkdownBlocks(input);

    assert.equal(blocks.length, 2);
    assert.equal(blocks[0].type, 'heading');
    if (blocks[0].type === 'heading') {
      assert.equal(blocks[0].level, 2);
      assert.equal(blocks[0].text, 'Background');
    }

    assert.equal(blocks[1].type, 'paragraph');
    if (blocks[1].type === 'paragraph') {
      assert.equal(blocks[1].text, 'A **discount** means paying less.');
    }
  });

  test('should parse level 3 headings', () => {
    const input = '### Activity\nTry this at the store.';
    const blocks = parseMarkdownBlocks(input);

    assert.equal(blocks.length, 2);
    assert.equal(blocks[0].type, 'heading');
    if (blocks[0].type === 'heading') {
      assert.equal(blocks[0].level, 3);
      assert.equal(blocks[0].text, 'Activity');
    }
  });

  test('should parse unordered bullet lists with - and *', () => {
    const input = `- Item one\n- Item two\n* Item three`;
    const blocks = parseMarkdownBlocks(input);

    assert.equal(blocks.length, 1);
    assert.equal(blocks[0].type, 'ul');
    if (blocks[0].type === 'ul') {
      assert.deepEqual(blocks[0].items, ['Item one', 'Item two', 'Item three']);
    }
  });

  test('should parse ordered numbered lists', () => {
    const input = `1. Earn money\n2. Save money\n3. Spend wisely`;
    const blocks = parseMarkdownBlocks(input);

    assert.equal(blocks.length, 1);
    assert.equal(blocks[0].type, 'ol');
    if (blocks[0].type === 'ol') {
      assert.deepEqual(blocks[0].items, ['Earn money', 'Save money', 'Spend wisely']);
    }
  });

  test('should parse multi-line blockquotes', () => {
    const input = `> A penny saved is\n> a penny earned.`;
    const blocks = parseMarkdownBlocks(input);

    assert.equal(blocks.length, 1);
    assert.equal(blocks[0].type, 'blockquote');
    if (blocks[0].type === 'blockquote') {
      assert.deepEqual(blocks[0].lines, ['A penny saved is', 'a penny earned.']);
    }
  });

  test('should parse markdown tables with headers and rows', () => {
    const input = [
      '| Item | Cost | Category |',
      '|---|---|---|',
      '| Book | $5 | Want |',
      '| Apple | $1 | Need |',
    ].join('\n');

    const blocks = parseMarkdownBlocks(input);

    assert.equal(blocks.length, 1);
    assert.equal(blocks[0].type, 'table');
    if (blocks[0].type === 'table') {
      assert.deepEqual(blocks[0].headers, ['Item', 'Cost', 'Category']);
      assert.equal(blocks[0].rows.length, 2);
      assert.deepEqual(blocks[0].rows[0], ['Book', '$5', 'Want']);
      assert.deepEqual(blocks[0].rows[1], ['Apple', '$1', 'Need']);
    }
  });

  test('should parse mixed lesson content properly', () => {
    const lesson = [
      '## What you will learn',
      'Learn to budget like a boss.',
      '',
      '> Money rules the world, but you rule your wallet!',
      '',
      '### Steps',
      '1. Track your income',
      '2. Plan your expenses',
      '',
      '### Tips',
      '- Always save first',
      '- Comparison shop',
    ].join('\n');

    const blocks = parseMarkdownBlocks(lesson);
    const types = blocks.map((b) => b.type);
    assert.deepEqual(types, [
      'heading',
      'paragraph',
      'blockquote',
      'heading',
      'ol',
      'heading',
      'ul',
    ]);
  });
});

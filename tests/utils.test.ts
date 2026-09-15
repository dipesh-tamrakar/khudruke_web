import test, { describe } from 'node:test';
import assert from 'node:assert/strict';
import { cn } from '../src/utils/cn.ts';

describe('Utils - cn', () => {
  test('should join plain class names', () => {
    assert.equal(cn('font-bold', 'text-center', 'p-4'), 'font-bold text-center p-4');
  });

  test('should handle conditional and falsy arguments', () => {
    const isPrimary = false;
    const isLarge = true;
    assert.equal(
      cn('btn', isPrimary && 'btn-primary', isLarge && 'btn-lg', undefined, null, false),
      'btn btn-lg'
    );
  });

  test('should resolve conflicting Tailwind CSS classes with tailwind-merge', () => {
    // p-2 should override p-4
    assert.equal(cn('p-4', 'p-2'), 'p-2');

    // text-white should override text-black
    assert.equal(cn('text-black', 'text-white'), 'text-white');

    // bg-amber-600 should override bg-amber-500
    assert.equal(cn('bg-amber-500', 'bg-amber-600'), 'bg-amber-600');
  });

  test('should return empty string when no arguments or only falsy values are provided', () => {
    assert.equal(cn(), '');
    assert.equal(cn(undefined, null, false), '');
  });
});

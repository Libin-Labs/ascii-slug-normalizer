import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('lowercases and hyphenates', () => {
  assert.equal(api.slugify('Hello, World!'), 'hello-world');
});
test('removes common accents', () => {
  assert.equal(api.slugify('Crème brûlée'), 'creme-brulee');
});
test('collapses separators', () => {
  assert.equal(api.slugify(' a---b  c '), 'a-b-c');
});
test('returns empty for punctuation', () => {
  assert.equal(api.slugify('!!!'), '');
});
test('supports empty input', () => {
  assert.equal(api.slugify(''), '');
});
test('rejects non-string input', () => {
  assert.throws(() => api.slugify(3), TypeError);
});

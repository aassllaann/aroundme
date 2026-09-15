import assert from 'node:assert/strict';
import { gameDirectories, getWorkCategory, workCategories, worksInCategory } from '../src/data/work-categories.js';
import { liquidRectPath, staticRectPath } from '../src/scripts/liquid-fields.js';

assert.equal(new Set(workCategories.map((category) => category.id)).size, workCategories.length);
assert.deepEqual(workCategories.map((category) => category.id), ['ai-systems', 'ui-ux', 'games', 'photography']);
assert.equal(getWorkCategory('ai-systems').contentCategory, 'AI·Systems');
assert.equal(getWorkCategory('ui-ux').contentCategory, 'Archive·Web');
assert.deepEqual(getWorkCategory('games').contentCategories, ['Game·Project', 'Game·Character', 'Game·Research']);
assert.deepEqual(gameDirectories.map((directory) => directory.id), ['game-projects', 'character-design', 'game-research-insights']);
assert.throws(() => getWorkCategory('unknown'));

const works = [
  { data: { categories: ['AI·Systems'] } },
  { data: { categories: ['AI·Systems', 'Game·Project'] } },
  { data: { categories: ['Game·Character'] } },
  { data: { categories: ['Photography'] } },
];
assert.equal(worksInCategory(works, getWorkCategory('ai-systems')).length, 2);
assert.equal(worksInCategory(works, getWorkCategory('games')).length, 2);

const rect = { x: 0, y: 0, width: 680, height: 588 };
const resting = staticRectPath(rect);
assert.equal(liquidRectPath(rect, { x: 340, y: 0 }, 0), resting);
assert.equal(liquidRectPath(rect, { x: 340, y: 400 }, 1, { radius: 10 }), resting);
const deformed = liquidRectPath(rect, { x: 340, y: 2 }, 1);
assert.notEqual(deformed, resting);
assert.equal(deformed.includes('NaN'), false);

console.log('Portfolio navigation and liquid-field checks passed.');

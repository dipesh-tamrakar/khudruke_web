import test, { describe } from 'node:test';
import assert from 'node:assert/strict';
import {
  LESSONS,
  CATEGORIES,
  BADGES,
  QUIZ_QUESTIONS,
  DIFFICULTY_LABELS,
  type CategoryKey,
} from '../src/data.ts';

describe('Data Integrity - Lessons', () => {
  test('should have exactly 34 lessons defined', () => {
    assert.equal(LESSONS.length, 34);
  });

  test('all lesson IDs should be unique', () => {
    const ids = LESSONS.map((l) => l.id);
    const uniqueIds = new Set(ids);
    assert.equal(ids.length, uniqueIds.size);
  });

  test('every lesson should contain valid fields and non-empty strings', () => {
    const validCategories: CategoryKey[] = ['earn', 'save', 'spend', 'grow'];
    const validDifficulties = Object.keys(DIFFICULTY_LABELS);

    for (const lesson of LESSONS) {
      assert.ok(lesson.id && lesson.id.trim().length > 0, `Lesson missing ID: ${lesson.title}`);
      assert.ok(lesson.title && lesson.title.trim().length > 0, `Lesson missing title: ${lesson.id}`);
      assert.ok(lesson.summary && lesson.summary.trim().length > 0, `Lesson missing summary: ${lesson.id}`);
      assert.ok(lesson.content && lesson.content.trim().length > 0, `Lesson missing content: ${lesson.id}`);
      assert.ok(lesson.emoji && lesson.emoji.trim().length > 0, `Lesson missing emoji: ${lesson.id}`);
      assert.ok(
        validCategories.includes(lesson.category),
        `Lesson ${lesson.id} has invalid category: ${lesson.category}`
      );
      assert.ok(
        validDifficulties.includes(lesson.difficulty),
        `Lesson ${lesson.id} has invalid difficulty: ${lesson.difficulty}`
      );
      assert.ok(lesson.duration_minutes > 0, `Lesson ${lesson.id} has non-positive duration`);
      assert.ok(lesson.age_min >= 4, `Lesson ${lesson.id} has unexpected age_min: ${lesson.age_min}`);
      assert.ok(
        lesson.age_min <= lesson.age_max,
        `Lesson ${lesson.id} age_min (${lesson.age_min}) exceeds age_max (${lesson.age_max})`
      );
    }
  });

  test('all 4 categories should have lessons assigned', () => {
    const categoryCounts: Record<string, number> = {
      earn: 0,
      save: 0,
      spend: 0,
      grow: 0,
    };

    for (const lesson of LESSONS) {
      categoryCounts[lesson.category]++;
    }

    assert.ok(categoryCounts.earn > 0, 'No lessons in earn category');
    assert.ok(categoryCounts.save > 0, 'No lessons in save category');
    assert.ok(categoryCounts.spend > 0, 'No lessons in spend category');
    assert.ok(categoryCounts.grow > 0, 'No lessons in grow category');
  });
});

describe('Data Integrity - Quiz Questions', () => {
  test('should have quiz questions defined', () => {
    assert.ok(QUIZ_QUESTIONS.length > 0);
  });

  test('every question must link to an existing lesson', () => {
    const lessonIds = new Set(LESSONS.map((l) => l.id));
    for (const q of QUIZ_QUESTIONS) {
      assert.ok(
        lessonIds.has(q.lesson_id),
        `Quiz question ${q.id} references non-existent lesson_id: ${q.lesson_id}`
      );
    }
  });

  test('every question must have valid options and a correct_index in range', () => {
    for (const q of QUIZ_QUESTIONS) {
      assert.ok(q.question && q.question.trim().length > 0, `Question ${q.id} has empty question text`);
      assert.ok(Array.isArray(q.options), `Question ${q.id} options is not an array`);
      assert.ok(q.options.length >= 2, `Question ${q.id} has fewer than 2 options`);
      for (const opt of q.options) {
        assert.ok(typeof opt === 'string' && opt.trim().length > 0, `Question ${q.id} has empty option`);
      }
      assert.ok(
        q.correct_index >= 0 && q.correct_index < q.options.length,
        `Question ${q.id} correct_index (${q.correct_index}) is out of bounds for options length (${q.options.length})`
      );
    }
  });
});

describe('Data Integrity - Categories and Badges', () => {
  test('should define all 4 expected categories with required styling properties', () => {
    const expectedCategories = ['earn', 'save', 'spend', 'grow'];
    assert.deepEqual(Object.keys(CATEGORIES).sort(), expectedCategories.sort());

    for (const key of expectedCategories) {
      const cat = CATEGORIES[key];
      assert.ok(cat.label, `Category ${key} missing label`);
      assert.ok(cat.emoji, `Category ${key} missing emoji`);
      assert.ok(cat.gradient, `Category ${key} missing gradient`);
      assert.ok(cat.soft, `Category ${key} missing soft`);
      assert.ok(cat.description, `Category ${key} missing description`);
    }
  });

  test('should have 7 unique badges with labels, emojis, and descriptions', () => {
    assert.equal(BADGES.length, 7);
    const badgeIds = BADGES.map((b) => b.id);
    assert.equal(new Set(badgeIds).size, 7);

    for (const b of BADGES) {
      assert.ok(b.id && b.id.trim().length > 0, 'Badge has empty id');
      assert.ok(b.label && b.label.trim().length > 0, `Badge ${b.id} has empty label`);
      assert.ok(b.emoji && b.emoji.trim().length > 0, `Badge ${b.id} has empty emoji`);
      assert.ok(b.description && b.description.trim().length > 0, `Badge ${b.id} has empty description`);
    }
  });
});

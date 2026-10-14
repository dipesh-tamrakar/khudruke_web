import test, { describe } from 'node:test';
import assert from 'node:assert/strict';
import {
  LESSONS,
  ALL_LESSONS,
  CATEGORIES,
  BADGES,
  QUIZ_QUESTIONS,
  ALL_QUIZ_QUESTIONS,
  DIFFICULTY_LABELS,
  isLessonNew,
  NEW_LESSON_DAYS_THRESHOLD,
  type CategoryKey,
  type ContentStatus,
  type Lesson,
} from '../src/data.ts';

describe('Data Integrity - Lessons', () => {
  test('should have lessons defined', () => {
    assert.ok(LESSONS.length > 0, 'No lessons loaded');
    assert.ok(ALL_LESSONS.length >= LESSONS.length, 'ALL_LESSONS must contain at least active lessons');
  });

  test('isLessonNew should correctly identify new lessons and auto-expire', () => {
    const baseLesson: Lesson = {
      id: 'test-lesson',
      order: 99,
      title: 'Test',
      category: 'earn',
      difficulty: 'beginner',
      emoji: '💼',
      summary: 'Summary',
      content: 'Content',
      duration_minutes: 5,
      age_min: 6,
      age_max: 12,
    };

    // 1. No created_at date -> not new
    assert.equal(isLessonNew(baseLesson), false);

    // 2. Created today -> is new
    const today = new Date().toISOString().split('T')[0];
    assert.equal(isLessonNew({ ...baseLesson, created_at: today }), true);

    // 3. Created 10 days ago -> is new
    const tenDaysAgo = new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    assert.equal(isLessonNew({ ...baseLesson, created_at: tenDaysAgo }), true);

    // 4. Created 60 days ago -> expired (not new with 45-day threshold)
    const sixtyDaysAgo = new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    assert.equal(isLessonNew({ ...baseLesson, created_at: sixtyDaysAgo }), false);

    // 5. Custom threshold test (e.g. 90 days)
    assert.equal(isLessonNew({ ...baseLesson, created_at: sixtyDaysAgo }, 90), true);
  });

  test('all lesson IDs should be unique', () => {
    const ids = LESSONS.map((l) => l.id);
    const uniqueIds = new Set(ids);
    assert.equal(ids.length, uniqueIds.size);
  });

  test('every lesson should contain valid fields, status, and non-empty strings', () => {
    const validCategories: CategoryKey[] = ['earn', 'save', 'spend', 'grow', 'explore'];
    const validDifficulties = Object.keys(DIFFICULTY_LABELS);
    const validStatuses: ContentStatus[] = ['active', 'draft', 'inactive'];

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
      assert.ok(
        validStatuses.includes(lesson.status || 'active'),
        `Lesson ${lesson.id} has invalid status: ${lesson.status}`
      );
      assert.equal(lesson.status, 'active', `Public LESSONS array must only include active lessons`);
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

  test('every question must have valid options, status, and a correct_index in range', () => {
    const validStatuses: ContentStatus[] = ['active', 'draft', 'inactive'];

    for (const q of QUIZ_QUESTIONS) {
      assert.ok(q.question && q.question.trim().length > 0, `Question ${q.id} has empty question text`);
      assert.ok(Array.isArray(q.options), `Question ${q.id} options is not an array`);
      assert.ok(q.options.length >= 2, `Question ${q.id} has fewer than 2 options`);
      assert.ok(validStatuses.includes(q.status || 'active'), `Question ${q.id} has invalid status: ${q.status}`);
      assert.equal(q.status, 'active', `Public QUIZ_QUESTIONS array must only include active questions`);
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
  test('should define all 5 expected categories with required styling properties', () => {
    const expectedCategories = ['earn', 'save', 'spend', 'grow', 'explore'];
    assert.deepEqual(Object.keys(CATEGORIES).sort(), expectedCategories.sort());

    for (const key of expectedCategories) {
      const cat = CATEGORIES[key as CategoryKey];
      assert.ok(cat.label, `Category ${key} missing label`);
      assert.ok(cat.emoji, `Category ${key} missing emoji`);
      assert.ok(cat.gradient, `Category ${key} missing gradient`);
      assert.ok(cat.soft, `Category ${key} missing soft`);
      assert.ok(cat.description, `Category ${key} missing description`);
    }
  });

  test('should have 8 unique badges with labels, emojis, and descriptions', () => {
    assert.equal(BADGES.length, 8);
    const badgeIds = BADGES.map((b) => b.id);
    assert.equal(new Set(badgeIds).size, 8);

    for (const b of BADGES) {
      assert.ok(b.id && b.id.trim().length > 0, 'Badge has empty id');
      assert.ok(b.label && b.label.trim().length > 0, `Badge ${b.id} has empty label`);
      assert.ok(b.emoji && b.emoji.trim().length > 0, `Badge ${b.id} has empty emoji`);
      assert.ok(b.description && b.description.trim().length > 0, `Badge ${b.id} has empty description`);
    }
  });
});

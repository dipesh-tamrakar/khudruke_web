// Mock localStorage for Zustand persist middleware in headless node environment
const storageMock: Record<string, string> = {};
if (typeof globalThis.localStorage === 'undefined') {
  (globalThis as unknown as { localStorage: Storage }).localStorage = {
    getItem: (key: string) => storageMock[key] ?? null,
    setItem: (key: string, val: string) => {
      storageMock[key] = String(val);
    },
    removeItem: (key: string) => {
      delete storageMock[key];
    },
    clear: () => {
      for (const k in storageMock) delete storageMock[k];
    },
    key: () => null,
    length: 0,
  };
}

import test, { describe, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { useProgressStore } from '../src/store.ts';
import { LESSONS } from '../src/data.ts';

describe('Store - useProgressStore', () => {
  beforeEach(() => {
    // Reset store to a clean state before each test
    useProgressStore.setState({
      completed: [],
      completedLessonIds: [],
      earnedBadgeIds: [],
      favorites: [],
      theme: 'system',
      userName: 'Young Learner',
      userEmail: 'young.learner@example.com',
    });
  });

  test('should initialize with correct default state', () => {
    const state = useProgressStore.getState();
    assert.deepEqual(state.completed, []);
    assert.deepEqual(state.completedLessonIds, []);
    assert.deepEqual(state.earnedBadgeIds, []);
    assert.deepEqual(state.favorites, []);
    assert.equal(state.theme, 'system');
    assert.equal(state.userName, 'Young Learner');
    assert.equal(state.userEmail, 'young.learner@example.com');
  });

  test('markComplete should record progress and update completedLessonIds', () => {
    const lesson = LESSONS[0];
    const { isNew, unlockedBadges } = useProgressStore.getState().markComplete(lesson.id, 5, 5);

    assert.equal(isNew, true);
    assert.ok(unlockedBadges.length > 0);
    assert.ok(unlockedBadges.some((b) => b.id === 'first_step'));

    const state = useProgressStore.getState();
    assert.equal(state.completedLessonIds.length, 1);
    assert.equal(state.completedLessonIds[0], lesson.id);
    assert.equal(state.completed.length, 1);
    assert.equal(state.completed[0].lesson_id, lesson.id);
    assert.equal(state.completed[0].score, 5);
    assert.equal(state.completed[0].total, 5);
    assert.ok(state.completed[0].completed_date);
  });

  test('markComplete on an existing completed lesson should update score if higher without duplicating ID', () => {
    const lesson = LESSONS[0];
    useProgressStore.getState().markComplete(lesson.id, 2, 5);

    let state = useProgressStore.getState();
    assert.equal(state.completedLessonIds.length, 1);
    assert.equal(state.completed[0].score, 2);

    // Re-take with higher score
    const result = useProgressStore.getState().markComplete(lesson.id, 4, 5);
    assert.equal(result.isNew, false);

    state = useProgressStore.getState();
    assert.equal(state.completedLessonIds.length, 1);
    assert.equal(state.completed[0].score, 4);

    // Re-take with lower score should preserve highest score
    useProgressStore.getState().markComplete(lesson.id, 1, 5);
    state = useProgressStore.getState();
    assert.equal(state.completed[0].score, 4);
  });

  test('unmarkComplete should remove lesson from completed and recalculate badges', () => {
    const lesson = LESSONS[0];
    useProgressStore.getState().markComplete(lesson.id, 5, 5);

    let state = useProgressStore.getState();
    assert.equal(state.completedLessonIds.length, 1);
    assert.ok(state.earnedBadgeIds.includes('first_step'));

    useProgressStore.getState().unmarkComplete(lesson.id);

    state = useProgressStore.getState();
    assert.equal(state.completedLessonIds.length, 0);
    assert.equal(state.completed.length, 0);
    assert.equal(state.earnedBadgeIds.includes('first_step'), false);
  });

  test('calculateBadges should award category badges when all lessons in a category are completed', () => {
    const earnLessons = LESSONS.filter((l) => l.category === 'earn');
    const earnIds = earnLessons.map((l) => l.id);

    // Initially with 0 lessons
    const emptyBadges = useProgressStore.getState().calculateBadges([]);
    assert.equal(emptyBadges.size, 0);

    // Complete only 1 earn lesson
    const oneEarn = useProgressStore.getState().calculateBadges([earnIds[0]]);
    assert.ok(oneEarn.has('first_step'));
    assert.equal(oneEarn.has('earn_explorer'), false);

    // Complete all earn lessons
    const allEarn = useProgressStore.getState().calculateBadges(earnIds);
    assert.ok(allEarn.has('first_step'));
    assert.ok(allEarn.has('earn_explorer'));
  });

  test('calculateBadges should award halfway_hero and money_master badges at milestones', () => {
    const allIds = LESSONS.map((l) => l.id);
    const halfCount = Math.ceil(allIds.length / 2);
    const halfIds = allIds.slice(0, halfCount);

    const halfBadges = useProgressStore.getState().calculateBadges(halfIds);
    assert.ok(halfBadges.has('halfway_hero'));
    assert.equal(halfBadges.has('money_master'), false);

    const fullBadges = useProgressStore.getState().calculateBadges(allIds);
    assert.ok(fullBadges.has('money_master'));
    assert.ok(fullBadges.has('halfway_hero'));
    assert.ok(fullBadges.has('first_step'));
    assert.ok(fullBadges.has('earn_explorer'));
    assert.ok(fullBadges.has('super_saver'));
    assert.ok(fullBadges.has('smart_spender'));
    assert.ok(fullBadges.has('growth_guru'));
    assert.equal(fullBadges.size, 7);
  });

  test('toggleFavorite and isFavorite should correctly manage user favorites', () => {
    const lessonId = LESSONS[0].id;

    assert.equal(useProgressStore.getState().isFavorite(lessonId), false);

    useProgressStore.getState().toggleFavorite(lessonId);
    assert.equal(useProgressStore.getState().isFavorite(lessonId), true);
    assert.deepEqual(useProgressStore.getState().favorites, [lessonId]);

    useProgressStore.getState().toggleFavorite(lessonId);
    assert.equal(useProgressStore.getState().isFavorite(lessonId), false);
    assert.deepEqual(useProgressStore.getState().favorites, []);
  });

  test('setTheme should update theme value', () => {
    useProgressStore.getState().setTheme('dark');
    assert.equal(useProgressStore.getState().theme, 'dark');

    useProgressStore.getState().setTheme('light');
    assert.equal(useProgressStore.getState().theme, 'light');

    useProgressStore.getState().setTheme('system');
    assert.equal(useProgressStore.getState().theme, 'system');
  });

  test('setUserName and setUserEmail should update profile state', () => {
    useProgressStore.getState().setUserName('Penny Wiseman');
    assert.equal(useProgressStore.getState().userName, 'Penny Wiseman');

    useProgressStore.getState().setUserEmail('penny@moneyville.org');
    assert.equal(useProgressStore.getState().userEmail, 'penny@moneyville.org');
  });
});

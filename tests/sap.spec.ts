import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  const url = 'https://demo.playwright.dev/todomvc';
  await page.goto(url);
});

const TODO_ITEMS = [
  'buy some cheese',
  'feed the cat',
  'book a doctors appointment',
] as const;

test.describe('Tests for SAP website', () => {
  test('should allow me to add todo items', async ({ page }) => {
    await page.waitForLoadState('domcontentloaded');
    // create a new todo locator
    const newTodo = page.getByPlaceholder('What needs to be done?');

    // Create 1st todo.
    await newTodo.fill(TODO_ITEMS[0]);
    await newTodo.press('Enter');

    // Make sure the list only has one todo item.
    await expect(page.getByTestId('todo-title')).toHaveText([TODO_ITEMS[0]]);

    // Create 2nd todo.
    await newTodo.fill(TODO_ITEMS[1]);
    await newTodo.press('Enter');

    // Make sure the list now has two todo items.
    await expect(page.getByTestId('todo-title')).toHaveText([
      TODO_ITEMS[0],
      TODO_ITEMS[1],
    ]);

    // await checkNumberOfTodosInLocalStorage(page, 2);
  });
});

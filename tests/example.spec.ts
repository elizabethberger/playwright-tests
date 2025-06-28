import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.sapfioneer.com/');
});

test('test', async ({ page }) => {
  await page.goto('https://www.sapfioneer.com/');
  await page.getByRole('button', { name: 'Solutions ' }).click();
  await page
    .getByRole('heading', { name: 'Finance Platform' })
    .getByLabel('Finance Platform')
    .click();
  await expect(
    page
      .getByRole('heading', { name: 'Finance Platform', exact: true })
      .getByLabel('Finance Platform'),
  ).toBeVisible();
});

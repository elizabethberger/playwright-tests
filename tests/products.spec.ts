import { test, expect, type Page } from '@playwright/test';
import { MenuComponent } from '../components/menu.component';
import { ProductsMenuComponent } from '../components/productsMenu.component';

test.describe('Tests for SAP Fioneer Product page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test(
    'user should verify if user is redirected to ESG KPI engine page',
    { tag: '@TEST2' },
    async ({ page }) => {
      const menu = new MenuComponent(page);
      const productsMenu = new ProductsMenuComponent(page);

      await page.waitForLoadState('domcontentloaded');
      await menu.verifyMenuElements();

      await menu.productMenuSection.click();
      await productsMenu.financeAndEsgButton.waitFor({ state: 'visible' });
      await productsMenu.financeAndEsgButton.click();
      await productsMenu.esgKpiEngineButton.click();

      await expect(page).toHaveURL(/.*\/esg-kpi-engine/);
    },
  );
});

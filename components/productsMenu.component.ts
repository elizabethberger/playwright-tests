import { Locator, Page } from '@playwright/test';

export class ProductsMenuComponent {
  financeAndEsgButton: Locator;
  esgKpiEngineButton: Locator;

  constructor(private page: Page) {
    this.financeAndEsgButton = this.page.locator('span:has-text("Finance & ESG")').nth(0);
    this.esgKpiEngineButton = this.page.getByRole('link', { name: 'ESG KPI Engine' });
  }
}

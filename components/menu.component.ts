import { expect, Locator, Page } from '@playwright/test';

export class MenuComponent {
  logo: Locator;
  productMenuSection: Locator;
  solutionsMenuSection: Locator;
  resourcesMenuSection: Locator;
  companyMenuSection: Locator;
  search: Locator;
  bookADemoButton: Locator;

  constructor(private page: Page) {
    this.logo = this.page
      .getByRole('banner')
      .getByRole('link', { name: 'Homepage' });
    this.productMenuSection = this.page.getByRole('button', {
      name: 'Products',
    });
    this.solutionsMenuSection = this.page.getByRole('button', {
      name: 'Solutions',
    });
    this.resourcesMenuSection = this.page.getByRole('button', {
      name: 'Resources',
    });
    this.companyMenuSection = this.page.getByRole('button', {
      name: 'Company',
    });
    this.search = this.page.locator('.collapsed-search').first();
    this.bookADemoButton = this.page.getByRole('link', { name: 'Book a demo' });
  }

  async verifyMenuElements() {
    await this.logo.waitFor({ state: 'visible' });
    await Promise.all([
      expect(this.productMenuSection).toBeVisible(),
      expect(this.solutionsMenuSection).toBeVisible(),
      expect(this.resourcesMenuSection).toBeVisible(),
      expect(this.companyMenuSection).toBeVisible(),
      expect(this.search).toBeVisible(),
      expect(this.bookADemoButton).toBeVisible(),
    ]);
  }
}

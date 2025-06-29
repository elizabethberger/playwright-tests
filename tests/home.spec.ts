import { test, expect, type Page } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { MenuComponent } from '../components/menu.component';

test.describe('Tests for SAP Fioneer home page', () => {
  let homePage: HomePage;
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    homePage = new HomePage(page);
  });

  test('user should verify end-toend solutions for finalcial section',
    {tag: "@TEST1"},
    async ({ page }) => {
    const menu = new MenuComponent(page);
  
    await page.waitForLoadState('domcontentloaded');
    await menu.verifyMenuElements();
    await Promise.all([
      //Verification for financial services header
      expect(homePage.financialServicesHeading).toBeVisible(),
      //Verification for banking section
      expect(homePage.bankingSectionHeading).toBeVisible(),
      expect(homePage.bankingSectionDescription).toBeVisible(),
      expect(homePage.bankingLearnMoreLink).toBeVisible(),
      //Verification for insurance section
      expect(homePage.insuranceSectionHeading).toBeVisible(),
      expect(homePage.insuranceSectionDescription).toBeVisible(),
      expect(homePage.insuranceLearnMoreLink).toBeVisible(),
      //Verification for finance section
      expect(homePage.financeAndESGSectionHeading).toBeVisible(),
      expect(homePage.financeAndESGSectionDescription).toBeVisible(),
      expect(homePage.financeLearnMoreLink).toBeVisible(),
    ]);
  });
});

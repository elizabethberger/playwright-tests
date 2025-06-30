import { test, expect, type Page } from '@playwright/test';
import { MenuComponent } from '../components/menu.component';
import { HomePage } from '../pages/home.page';
import { ContactPage } from '../pages/contact.page';
import { contactData } from '../test-data/contact.data';

test.describe('Tests for SAP Fioneer Contact page', () => {
  let contactPage: ContactPage;
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    contactPage = new ContactPage(page);
  });

  test.only(
    'user should verify valdiation when an incorrect email is filled',
    { tag: '@TEST3' },
    async ({ page }) => {
      const menu = new MenuComponent(page);
      const home = new HomePage(page);

      await page.waitForLoadState('domcontentloaded');
      await menu.verifyMenuElements();

      await home.getInTouchButton.click();
      await expect(page).toHaveURL(/.*\/contact-sales/);

      await page.waitForLoadState('domcontentloaded');
      await expect(contactPage.firstNameField).toBeVisible();

      await contactPage.firstNameField.fill(contactData.firstName);
      await contactPage.lastNameField.fill(contactData.lastName);
      await contactPage.businessEmailField.fill(
        contactData.incorrectBusinessEmail,
      );
      await contactPage.phoneNumberField.click();

      await expect(contactPage.emailValidationText).toBeVisible();
    },
  );
});

import { Locator, Page } from '@playwright/test';

export class ContactPage {
  firstNameField: Locator;
  lastNameField: Locator;
  businessEmailField: Locator;
  phoneNumberField: Locator;
  emailValidationText: Locator;

  constructor(private page: Page) {
    //Section header
    this.firstNameField = this.page.getByRole('textbox', {
      name: 'First name*',
    });
    this.lastNameField = this.page.getByRole('textbox', { name: 'Last name*' });
    this.businessEmailField = this.page.getByRole('textbox', {
      name: 'Business email*',
    });
    this.phoneNumberField = this.page.getByRole('textbox', {
      name: 'Phone number*',
    });
    this.emailValidationText = this.page.getByText('Email must be formatted');
  }
}

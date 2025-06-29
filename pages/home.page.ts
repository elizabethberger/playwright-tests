import { Locator, Page } from '@playwright/test';

export class HomePage {
  financialServicesHeading: Locator;
  bankingSectionHeading: Locator;
  bankingSectionDescription: Locator;
  bankingLearnMoreLink: Locator;
  insuranceSectionHeading: Locator;
  insuranceSectionDescription: Locator;
  insuranceLearnMoreLink: Locator;
  financeAndESGSectionHeading: Locator;
  financeAndESGSectionDescription: Locator;
  financeLearnMoreLink: Locator;

  constructor(private page: Page) {
    //Section header
    this.financialServicesHeading = this.page.getByRole('heading', {
      name: 'End-to-end solutions for',
    });
    //Banking section elements
    this.bankingSectionHeading = this.page.locator(
      ".cards-block div > [href*='/banking/'] h3",
    );
    this.bankingSectionDescription = this.page.locator(
      ".cards-block div > [href*='/banking/'] p",
    );
    this.bankingLearnMoreLink = this.page
      .getByRole('link', { name: 'Learn more' })
      .first();
    //Insurance section elements
    this.insuranceSectionHeading = this.page.locator(
      ".cards-block div > [href*='/insurance/'] h3",
    );
    this.insuranceSectionDescription = this.page.locator(
      ".cards-block div > [href*='/insurance/'] p",
    );
    this.insuranceLearnMoreLink = this.page
      .getByRole('link', { name: 'Learn more' })
      .nth(1);
    //Finance section elements
    this.financeAndESGSectionHeading = this.page.locator(
      ".cards-block div > [href*='/finance-esg/'] h3",
    );
    this.financeAndESGSectionDescription = this.page.locator(
      ".cards-block div > [href*='/finance-esg/'] p",
    );
    this.financeLearnMoreLink = this.page
      .getByRole('link', { name: 'Learn more' })
      .nth(2);
  }

  async loginAsUser() {
    await this.financialServicesHeading;
  }
}

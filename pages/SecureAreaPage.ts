import { Page, Locator } from '@playwright/test';

export class SecureAreaPage {
  readonly page: Page;
  readonly flashMessage: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.flashMessage = page.locator('#flash');
    this.logoutButton = page.locator('.button.secondary.radius');
    this.flashMessage = page.locator('#flash');
  }

  async logout() {
    await this.logoutButton.click();
  }
}
import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SecureAreaPage } from '../pages/SecureAreaPage';

type Pages = {
  loginPage: LoginPage;
  securePage: SecureAreaPage;
};

export const test = base.extend<Pages>({
    loginPage: async ({ page }, use) => {
      const loginPage = new LoginPage(page);
      await loginPage.navigate(); 
      await use(loginPage);
    },

  securePage: async ({ page }, use) => {
    await use(new SecureAreaPage(page));
  }
});

export { expect } from '@playwright/test';
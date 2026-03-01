import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SecureAreaPage } from '../pages/SecureAreaPage';
import { VALID_USERNAME, VALID_PASSWORD } from '../utils/constants';

type AuthFixtures = {
  authenticatedPage: SecureAreaPage;
};

export const test = base.extend<AuthFixtures>({
  authenticatedPage: async ({ page }, use) => {
    
    const loginPage = new LoginPage(page);
    const securePage = new SecureAreaPage(page);

    await loginPage.navigate();
    await loginPage.login(VALID_USERNAME, VALID_PASSWORD);

    await use(securePage);
  },
});

export { expect } from '@playwright/test';
import { test, expect } from '../fixtures/login.fixture';
import { VALID_PASSWORD, VALID_USERNAME } from '../utils/constants';

test.describe('Login Feature', () => {

  test('Successful login with valid credentials', async ({ loginPage, securePage, page }) => {

    const [authResponse] = await Promise.all([
      page.waitForResponse(response =>
        response.url().includes('/authenticate') &&
        response.request().method() === 'POST'
      ),
      loginPage.login(VALID_USERNAME, VALID_PASSWORD)
    ]);

    // HTTP validation
    expect(authResponse.status()).toBe(303);

    // UI validations
    await expect(page).toHaveURL('/secure');
    await expect(securePage.flashMessage)
      .toContainText('You logged into a secure area!');
    await expect(securePage.logoutButton)
      .toBeVisible();
  });

  test('Login fails with invalid username', async ({ loginPage }) => {
    
    await loginPage.login('invalidUser', VALID_PASSWORD);
  
    await expect(loginPage.flashMessage)
      .toContainText('Your username is invalid!');
  });

  test('Login fails with invalid password', async ({ loginPage }) => {
  
    await loginPage.login(VALID_USERNAME, 'wrongPassword');
  
    await expect(loginPage.flashMessage)
      .toContainText('Your password is invalid!');
  });

  test('Login fails with empty fields', async ({ loginPage }) => {
  
    await loginPage.login('', '');
  
    await expect(loginPage.flashMessage)
      .toBeVisible();
  });

});
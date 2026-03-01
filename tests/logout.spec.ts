import { test, expect } from '../fixtures/authenticated.fixture';

test.describe('Logout Feature', () => {

  test('User can logout successfully', async ({ authenticatedPage, page }) => {

    await authenticatedPage.logout();

    await expect(page)
      .toHaveURL('/login');

    await expect(authenticatedPage.flashMessage)
      .toContainText('You logged out of the secure area!');
  });

});
import { test, expect } from '../fixtures/authenticated.fixture';
import { SUCCESS_MESSAGE } from '../utils/constants';

test.describe('Logout Feature', () => {

  test('User can logout successfully', async ({ authenticatedPage, page }) => {

    await authenticatedPage.logout();

    await expect(page)
      .toHaveURL('/login');

    await expect(authenticatedPage.flashMessage)
      .toContainText(SUCCESS_MESSAGE);
  });

});
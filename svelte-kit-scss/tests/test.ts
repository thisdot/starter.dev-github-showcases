import { expect, test } from '@playwright/test';

test('signin page has "sign in with github" button', async ({ page }) => {
  await page.goto('/signin');
  expect(await page.textContent('button')).toBe('Sign in with GitHub');
});

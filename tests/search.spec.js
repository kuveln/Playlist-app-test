const { test, expect } = require('@playwright/test');

test('Search filters tracks correctly', async ({ page }) => {
  await page.goto('https://vite-react-alpha-lemon.vercel.app/');

  const searchInput = page.locator('input#\\:r0\\:');
  await searchInput.fill('Summer Breeze');

  const tracks = page.locator('#tracklist .MuiGrid-container');
  const count = await tracks.count();

  let found = false;
  for (let i = 0; i < count; i++) {
    const name = await tracks.nth(i).locator('div.css-1udb513 p').textContent();
    if (name === 'Summer Breeze') {
      found = true;
      break;
    }
  }
  expect(found).toBe(true);
});
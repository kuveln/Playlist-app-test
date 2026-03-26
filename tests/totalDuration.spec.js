const { test, expect } = require('@playwright/test');

test('Verify total playlist duration in seconds', async ({ page }) => {
  await page.goto('https://vite-react-alpha-lemon.vercel.app/');

  const totalDurationText = await page.locator('#playlist-duration').textContent();

  if (totalDurationText.includes('No tracks')) {
    expect(totalDurationText).toContain('No tracks on playlist');
    return;
  }

  const displayedTotal = Number(totalDurationText);
  const expectedTotal = 3 * 60 + 35;
  expect(displayedTotal).toBe(expectedTotal);
});
const { test, expect } = require('@playwright/test');

test('Add a track using "+" button', async ({ page }) => {
  await page.goto('https://vite-react-alpha-lemon.vercel.app/');

  const firstTrack = page.locator('#tracklist .MuiGrid-container').first();
  const trackName = await firstTrack.locator('div.css-1udb513 p').textContent();

  await firstTrack.locator('button:has-text("+")').click();

  const playlistTracks = page.locator('#playlist p');
  let added = false;
  const playlistCount = await playlistTracks.count();
  for (let i = 0; i < playlistCount; i++) {
    const name = await playlistTracks.nth(i).textContent();
    if (name.includes(trackName)) {
      added = true;
      break;
    }
  }
  expect(added).toBe(true);
});
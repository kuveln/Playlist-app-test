export function durationToSeconds(durationStr) {
  // очікує формат "mm:ss"
  const [minutes, seconds] = durationStr.split(':').map(Number);
  return minutes * 60 + seconds;
}

export async function getPlaylistDurations(page) {
  const durations = await page.locator('.playlist li .duration').allTextContents();
  return durations.map(durationToSeconds);
}
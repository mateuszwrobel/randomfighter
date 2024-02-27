import { test, expect } from '@playwright/test';

test('User should be able to play a game', async ({ page }) => {
  await page.goto('/');

  await page.locator('[data-testid="resource-select"] span').click();
  await page
    .locator('[data-testid="resource-option-cargo_capacity"] > span')
    .click();
  await page
    .locator(
      '[data-testid="container-player1"] [data-testid="starship-select"]'
    )
    .click();

  await page.locator('[data-testid="starship-option1"]').click();
  await page
    .locator(
      '[data-testid="container-player2"] [data-testid="starship-select"] span'
    )
    .click();
  await page.locator('[data-testid="starship-option2"]').click();

  await expect(page.locator('[data-testid="start-game-button"]')).toHaveText(
    'Start Game'
  );
});

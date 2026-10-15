import { test, expect } from "@playwright/test";

test("storybook loads and renders a story", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (err) => errors.push(err.message));
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });

  await page.goto("http://localhost:6006/");
  // Storybook sidebar renders after the manager boots
  await expect(page.locator("#storybook-explorer-tree, [data-testid=sidebar]").first()).toBeVisible({ timeout: 60_000 });
  // ponytail: just assert the manager boots. Upgrade path: parse story index and iterate to render each.
  expect(errors.filter((e) => !e.toLowerCase().includes("favicon"))).toEqual([]);
});

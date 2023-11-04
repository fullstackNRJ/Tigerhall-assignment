import { test, expect } from "@playwright/test";

test("should navigate to the main page and verify title to be Tigerhall", async ({
  page,
}) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/");

  const pageTitle = await page.title();

  await expect(pageTitle).toBe("Tigerhall");
});

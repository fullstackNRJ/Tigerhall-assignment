import { test, expect } from "@playwright/test";

const endPoint = `https://api.tigerhall.net/v2/`;
//change `self discipline` string to test against different keywords
const query = "ai";

test.describe("Search Podcasts", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto("/");
  });

  test("Search bar exists", async ({ page }) => {
    const textInput = await page.getByPlaceholder("Search podcasts");
    await expect(textInput).toBeTruthy();
  });

  test("Default results exists", async ({ page }) => {
    await page.waitForResponse(endPoint);
    const parentDiv = await page.getByTestId("search-results");
    const children = await parentDiv.evaluate(
      (page) => Array.from(page.querySelectorAll(".chakra-card")).length
    );
    console.log("children >>", children);
    expect(children).toBeGreaterThan(0);
  });

  test("Search podcast for AI and verify it renders some results", async ({
    page,
  }) => {
    const input = await page.getByPlaceholder("Search podcasts");
    await input.fill(query);
    await page.waitForResponse(endPoint);

    const parentDiv = await page.getByTestId("search-results");
    const children = await parentDiv.evaluate(
      (page) => Array.from(page.querySelectorAll(".chakra-card")).length
    );
    console.log("children >>", children);
    expect(children).toBeGreaterThan(0);
  });
});

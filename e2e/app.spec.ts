import { test, expect } from "@playwright/test";

test("app loads at root with no console errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (err) => errors.push(err.message));
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });

  await page.goto("http://localhost:3000/");
  await expect(page.locator("#root")).toBeAttached();
  // ponytail: the renderer waits for a postMessage with a document; verifying the mount is sufficient as a build-tool smoke check. Upgrade path: send a sample document via page.evaluate(postMessage) if templates become part of this test.
  const IGNORED = [
    "favicon",
    // ponytail: findDOMNode is a React 18 deprecation inside @tradetrust-tt/decentralized-renderer-react-components, pre-existing and vendored; unrelated to the Vite migration. Upgrade path: drop this filter when the component library stops using findDOMNode.
    "finddomnode is deprecated",
  ];
  const unexpected = errors.filter(
    (e) => !IGNORED.some((p) => e.toLowerCase().includes(p))
  );
  expect(unexpected).toEqual([]);
});

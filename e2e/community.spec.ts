import { expect, test } from "@playwright/test";
import en from "../src/i18n/messages/en.json";
import ko from "../src/i18n/messages/ko.json";
import { gotoLocalizedPath } from "./utils";

const communityCases = [
  {
    locale: "en",
    dict: en,
  },
  {
    locale: "ko",
    dict: ko,
  },
] as const;

for (const { locale, dict } of communityCases) {
  const messages = {
    title: dict.community.title,
    description: dict.community.description,
    filters: dict.community.filters,
    ctaTitle: dict.community.cta.title,
    ctaDescription: dict.community.cta.description,
    ctaButton: dict.community.cta.button,
    rankingTitle: dict.community.ranking.title,
    rankingDescription: dict.community.ranking.description,
    rankingCarbonSaved: dict.community.ranking.carbonSaved,
    generated: dict.community.post.generated,
    savedCarbon: dict.community.post.savedCarbon,
    comment: dict.community.post.comment,
    addFriend: dict.community.post.addFriend,
    categories: dict.community.post.categories,
  };

  test.describe(`Community page (${locale})`, () => {
    test("renders the community feed, CTA, and ranking cards", async ({
      page,
      baseURL,
    }) => {
      await gotoLocalizedPath(page, baseURL!, locale, "/community");

      const filterBar = page.locator("main > div").first();
      const posts = page.locator("article");
      const firstPost = posts.nth(0);
      const secondPost = posts.nth(1);
      const thirdPost = posts.nth(2);

      await expect(
        page.getByRole("heading", { level: 1, name: messages.title }),
      ).toBeVisible();
      await expect(page.getByText(messages.description)).toBeVisible();

      await expect(
        filterBar.getByRole("button", {
          name: messages.filters.all,
          exact: true,
        }),
      ).toBeVisible();
      await expect(
        filterBar.getByRole("button", {
          name: messages.filters.friends,
          exact: true,
        }),
      ).toBeVisible();
      await expect(
        filterBar.getByRole("button", {
          name: messages.filters.local,
          exact: true,
        }),
      ).toBeVisible();
      await expect(
        filterBar.getByRole("button", {
          name: messages.filters.review,
          exact: true,
        }),
      ).toBeVisible();

      await expect(posts).toHaveCount(3);
      await expect(firstPost.getByText("Alice", { exact: true })).toBeVisible();
      await expect(
        firstPost.getByText(messages.categories.friends, { exact: true }),
      ).toBeVisible();
      await expect(
        firstPost.getByText(
          "Generated 5.1 kWh with solar today. Sharing the surplus with my neighbor!",
        ),
      ).toBeVisible();
      await expect(
        firstPost.getByText(messages.generated, { exact: true }),
      ).toBeVisible();
      await expect(
        firstPost.getByText("5.1 kWh", { exact: true }),
      ).toBeVisible();
      await expect(
        firstPost.getByText(messages.savedCarbon, { exact: true }),
      ).toBeVisible();
      await expect(
        firstPost.getByText("2.3 kg", { exact: true }),
      ).toBeVisible();

      await expect(
        secondPost.getByText("Minho", { exact: true }),
      ).toBeVisible();
      await expect(
        secondPost.getByText(messages.categories.review, { exact: true }),
      ).toBeVisible();
      await expect(
        secondPost.getByText("3.8 kWh", { exact: true }),
      ).toBeVisible();
      await expect(
        secondPost.getByText("1.7 kg", { exact: true }),
      ).toBeVisible();

      await expect(
        thirdPost.getByText("Jiyeon", { exact: true }),
      ).toBeVisible();
      await expect(
        thirdPost.getByText(messages.categories.local, { exact: true }),
      ).toBeVisible();
      await expect(
        thirdPost.getByText("12.4 kg", { exact: true }),
      ).toBeVisible();

      await expect(page.getByText(messages.comment).first()).toBeVisible();
      await expect(page.getByText(messages.addFriend).first()).toBeVisible();

      await expect(
        page.getByRole("heading", { level: 2, name: messages.ctaTitle }),
      ).toBeVisible();
      await expect(page.getByText(messages.ctaDescription)).toBeVisible();
      await expect(
        page.getByRole("button", { name: messages.ctaButton }),
      ).toBeVisible();

      await expect(
        page.getByRole("heading", { level: 2, name: messages.rankingTitle }),
      ).toBeVisible();
      await expect(page.getByText(messages.rankingDescription)).toBeVisible();
      await expect(page.getByText(`#1 Jiyeon`)).toBeVisible();
      await expect(page.getByText(`#2 Alice`)).toBeVisible();
      await expect(page.getByText(`#3 Minho`)).toBeVisible();
      await expect(
        page.getByText(messages.rankingCarbonSaved).first(),
      ).toBeVisible();
    });

    test("filters community posts by category", async ({ page, baseURL }) => {
      await gotoLocalizedPath(page, baseURL!, locale, "/community");

      const filterBar = page.locator("main > div").first();
      const posts = page.locator("article");

      await filterBar
        .getByRole("button", {
          name: messages.filters.friends,
          exact: true,
        })
        .click();
      await expect(posts).toHaveCount(1);
      await expect(page.getByText("Alice", { exact: true })).toBeVisible();
      await expect(
        page.getByText(
          "Generated 5.1 kWh with solar today. Sharing the surplus with my neighbor!",
        ),
      ).toBeVisible();
      await expect(
        page.getByText(
          "Completed an energy sharing trade. It feels good to turn surplus energy into value.",
        ),
      ).toHaveCount(0);

      await filterBar
        .getByRole("button", {
          name: messages.filters.local,
          exact: true,
        })
        .click();
      await expect(posts).toHaveCount(1);
      await expect(page.getByText("Jiyeon", { exact: true })).toBeVisible();
      await expect(
        page.getByText(
          "This month, I reached the top 10% in carbon savings in my local grid community.",
        ),
      ).toBeVisible();

      await filterBar
        .getByRole("button", {
          name: messages.filters.review,
          exact: true,
        })
        .click();
      await expect(posts).toHaveCount(1);
      await expect(page.getByText("Minho", { exact: true })).toBeVisible();
      await expect(
        page.getByText(
          "Completed an energy sharing trade. It feels good to turn surplus energy into value.",
        ),
      ).toBeVisible();

      await filterBar
        .getByRole("button", {
          name: messages.filters.all,
          exact: true,
        })
        .click();
      await expect(posts).toHaveCount(3);
    });
  });
}

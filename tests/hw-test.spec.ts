import {expect, test} from "@playwright/test";
import {PageTitle} from "../utils/enums";
import * as pages from "../pages/index"
import {PageFactory} from "../pages/pageFactory/pageFactory";

test.describe('3dNews', () => {
        test('Home Page Open', async ({page}) => {
            const basePage = await PageFactory.getPage(page, "BASE") as pages.base.BasePage;
            await basePage.openPage("HOME");
            await expect(await page.innerText(pages.home.elements.title())).toContain(PageTitle.HOME.toUpperCase());
        });
        test('Open Contacts page', async ({page}) => {
            const homePage = await PageFactory.getPage(page, "HOME") as pages.home.HomePage;
            await homePage.openPage("HOME");
            await homePage.openNavigation("КОНТАКТЫ");
            await expect(await page.innerText(pages.home.elements.navigationTitle())).toContain(PageTitle.CONTACTS);
        });
        test('Open Phone page', async ({page}) => {
            const homePage = await PageFactory.getPage(page, "HOME") as pages.home.HomePage;
            await homePage.openPage("HOME");
            await homePage.openSideBarMenu("Смартфоны");
            await expect(await page.innerText(pages.home.elements.navigationTitle())).toContain(PageTitle.PHONES);
        });
        test('Open Phone submenu of Phone page', async ({page}) => {
            const homePage = await PageFactory.getPage(page, "HOME") as pages.home.HomePage;
            await homePage.openPage("HOME");
            await homePage.openSideBarMenu("Смартфоны");
            await homePage.openSideBarSubMenu("Смартфоны", "Смартфоны");
            await expect(await page.locator(pages.home.elements.sectionHeader("Смартфоны", "Смартфоны"))).toHaveCount(1);
        });
        test('Open Compare submenu of Phone page', async ({page}) => {
            const homePage = await PageFactory.getPage(page, "HOME") as pages.home.HomePage;
            await homePage.openPage("HOME");
            await homePage.openSideBarMenu("Смартфоны");
            await homePage.openSideBarSubMenu("Смартфоны", "Сравнительные обзоры");
            await expect(await page.locator(pages.home.elements.sectionHeader("Смартфоны", "Сравнительные обзоры"))).toHaveCount(1);
        });

    }
)

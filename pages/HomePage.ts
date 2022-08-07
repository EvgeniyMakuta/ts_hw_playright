import { BasePage } from "./BasePage";
import { Page } from "@playwright/test";
import {
    Navigation,
    NavigationKey,
    SideBarMenu,
    SideBarMenuKey,
    SideBarSumMenu,
    SideBarSumMenuKey
} from "../utils/enums";

export const elements = {
    title: () => "#mainNewsLabel",
    navigation: (name: string) => `[id=info-links] [href='/${name}']`,
    navigationTitle: () => ".section-title",
    sideBarMenu: (menu: string) => `[class*=menu-item] [href='/${menu}']`,
    sideBarSubMenu: (menu: string, subMenu: string) => `[class*=submenu] [href='/${menu}/${subMenu}']`,
    sectionHeader: (menu: SideBarMenuKey, submenu: SideBarSumMenuKey) => `[data-url="${SideBarMenu[menu]}/${SideBarSumMenu[submenu]}"]`
}

 export class HomePage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async openNavigation(pageName: NavigationKey): Promise<void> {
        await this.page.locator(elements.navigation(Navigation[pageName])).click()
    }

    async openSideBarMenu(name: SideBarMenuKey): Promise<void> {
        await this.page.locator(elements.sideBarMenu(SideBarMenu[name])).click();
    }

     async openSideBarSubMenu(menu: SideBarMenuKey, subMenu: SideBarSumMenuKey): Promise<void> {
         await this.page.locator(elements.sideBarSubMenu(SideBarMenu[menu], SideBarSumMenu[subMenu])).click();
     }

 }
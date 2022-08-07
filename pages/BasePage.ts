import { Page } from "@playwright/test";
import { URL } from "../utils/url"
import { PageKey, PageUrl } from "../utils/enums";

export class BasePage {
    constructor(protected page: Page) {}

    async openPage(page: PageKey): Promise<void> {
        await this.page.goto(`${URL.home}/${PageUrl[page]}`)
    }
}
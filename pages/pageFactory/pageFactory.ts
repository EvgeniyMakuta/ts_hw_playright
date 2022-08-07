import { Page } from "@playwright/test";
import * as pages from "../index"
import { Pages, PagesKey } from "../../utils/enums";

export class PageFactory {
    static getPage(page: Page, pageName: PagesKey) {
        switch (Pages[pageName]) {
            case "HomePage":
                return new pages.home.HomePage(page);
            default:
                return new pages.base.BasePage(page);
        }
    }
}
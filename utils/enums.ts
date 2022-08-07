export enum PageTitle {
    "HOME" = "Главное",
    "ABOUT" = "About 3DNews",
    "CONTACTS" = "Контакты",
    "SUBSCRIBE" = "Подписка",
    "PHONES" = "Смартфоны",
}

export enum PageUrl {
    "HOME" = "",
    "VIDEO" = "video",
    "PHONE" = "phone"
}
export type PageKey = keyof typeof PageUrl;

export enum Pages {
    "BASE" = "BasePage",
    "HOME" = "HomePage",
}
export type PagesKey = keyof typeof Pages;

export enum Navigation {
    "О САЙТЕ" = "about",
    "РЕКЛАМА" = "a",
    "РАССЫЛКА" = "subscribe",
    "КОНТАКТЫ" = "contact",
}
export type NavigationKey = keyof typeof Navigation;

export enum SideBarMenu {
    "Смартфоны" = "phone",
}
export type SideBarMenuKey = keyof typeof SideBarMenu;

export enum SideBarSumMenu {
    "Сравнительные обзоры" = "compare",
    "Смартфоны" = "smartphone",
    "Аналитика" = "editorial",

}
export type SideBarSumMenuKey = keyof typeof SideBarSumMenu;
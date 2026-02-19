// import { ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts"
// import Admin from "./pages/Admin"
// import Auth from "./pages/Auth"
import MainPage from "./pages/MainPage";
import MusicSectionPage from "./pages/MusicSectionPage";
import TestArticlePage from "./pages/TestArticlePage";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, MAIN_ROUTE, SECTION_ROUTE, ARTICLE_ROUTE } from "./utils/consts";

// export const authRoutes = [
//     {
//         path: ADMIN_ROUTE,
//         Component: Admin
//     },
//     {
//         path: BASKET_ROUTE,
//         Component: Basket
//     },
// ]

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Component: MainPage,
  },
  {
    path: SECTION_ROUTE,
    Component: MusicSectionPage,
  },
  {
    path: ARTICLE_ROUTE,
    Component: TestArticlePage,
  },
  // {
  //     path: LOGIN_ROUTE,
  //     Component: Auth
  // },
  //     {
  //     path: REGISTRATION_ROUTE,
  //     Component: Auth
  // },
];

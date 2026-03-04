// import MusicSectionPage from "./pages/MusicSectionPage";
// import TestArticlePage from "./pages/TestArticlePage";
import MainPage from "./pages/MainPage";
import ArticlePage from "./pages/ArticlePage";
import SectionPage from "./pages/SectionPage";
import SuperStats from "./pages/Super/SuperStats";
import SuperBackup from "./pages/Super/SuperBackup";
import SuperLogs from "./pages/Super/SuperLogs";
import AdminPanel from "./pages/Admin/AdminPanel";
import UsersManagement from "./pages/Admin/UsersManagement";
import AllArticlesPage from "./pages/Admin/AllArticlesPage";
import EditorPanel from "./pages/User/EditorPanel";
import MyArticles from "./pages/User/MyArticles";
import Forbidden from "./pages/Forbidden";
import Auth from "./pages/Auth";

import {
  MAIN_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SECTION_ROUTE,
  ARTICLE_ROUTE,
  EDITOR_PANEL_ROUTE,
  MY_ARTICLES_ROUTE,
  ADMIN_PANEL_ROUTE,
  ADMIN_ARTICLES_ROUTE,
  ADMIN_USERS_ROUTE,
  SUPER_LOGS_ROUTE,
  SUPER_BACKUP_ROUTE,
  SUPER_STATS_ROUTE,
  ERROR_ROUTE,
} from "./utils/consts";


type RouteRole = 'user' | 'admin' | 'super';
type RouteConfig = {
  path: string;
  Component: React.ComponentType;
  roles?: RouteRole[];
}

export const authRoutes: RouteConfig[] = [
  {
    path: EDITOR_PANEL_ROUTE + '/:id?', // id редактирование, иначе создание
    Component: EditorPanel,
    roles: ['user', 'admin', 'super']
  },
  {
    path: MY_ARTICLES_ROUTE,
    Component: MyArticles,
    roles: ['user', 'admin', 'super']
  },
];

export const adminRoutes: RouteConfig[] = [
  {
    path: ADMIN_PANEL_ROUTE,
    Component: AdminPanel,
    roles: ['admin', 'super']
  },
  {
    path: ADMIN_ARTICLES_ROUTE,
    Component: AllArticlesPage, // обзор всего
    roles: ['admin', 'super']
  },
  {
    path: ADMIN_USERS_ROUTE,
    Component: UsersManagement,
    roles: ['admin', 'super']
  },
];

export const superRoutes: RouteConfig[] = [
  {
    path: SUPER_LOGS_ROUTE,
    Component: SuperLogs,
    roles: ['super']
  },
  {
    path: SUPER_BACKUP_ROUTE,
    Component: SuperBackup,
    roles: ['super']
  },
  {
    path: SUPER_STATS_ROUTE,
    Component: SuperStats,
    roles: ['super']
  },
];

export const publicRoutes: RouteConfig[] = [
  {
    path: MAIN_ROUTE,
    Component: MainPage,
  },
  {
    path: SECTION_ROUTE,
    Component: SectionPage, // query params
  },
  {
    path: ARTICLE_ROUTE, //+ '/:id',
    Component: ArticlePage,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: ERROR_ROUTE,
    Component: Forbidden
  },
];

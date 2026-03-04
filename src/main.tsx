import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import UserStore from "./store/UserStore.ts";
import ArticleStore from "./store/ArticleStore.ts";

type ContextType = {
  user: UserStore;
  article: ArticleStore;
}

export const Context = createContext<ContextType>({} as ContextType);
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Context.Provider value={{
      user: new UserStore(),
      article: new ArticleStore(),
    }}>
      <App />
    </Context.Provider>,
  </StrictMode>,
);

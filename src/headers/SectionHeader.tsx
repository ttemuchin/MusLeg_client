import { NavLink } from "react-router-dom";
import { useSafeLocation } from "../hooks/useSafeLocation";

import styles from "./MainHeader.module.css";
import { ARTICLE_ROUTE, MAIN_ROUTE, SECTION_ROUTE } from "../utils/consts";

function SectionHeader() {
  const location = useSafeLocation() as { pathname: string };

  const routesWithBottomLinks = [SECTION_ROUTE];

  const showBottomLinks = routesWithBottomLinks.includes(location.pathname);

  return (
    <>
      <header className={styles.backcover}>
        <div className={styles.header}>
          <div className={styles.leftColumn}>
            <NavLink className={styles.titleLink} to={MAIN_ROUTE}>
              <h1 className={styles.title}>MUSIC LEGENDS</h1>
              <h2 className={styles.subtitle}>ONLINE MAGAZINE</h2>
            </NavLink>
            <hr />
          </div>
          <div className={styles.verticalDivider}></div>
          <div className={styles.rightColumn}>
            <div className={styles.field}>
              <div className={styles.topLinks}>
                <NavLink to={SECTION_ROUTE}>Музыка</NavLink>
                <NavLink to={ARTICLE_ROUTE}>Кино</NavLink>
                <a href="#">Литература</a>
                <a href="#">Тесты</a>
              </div>
              <hr />
              {showBottomLinks && (
                <div className={styles.bottomLinksContainer}>
                  <span className={styles.bottomLinks}>
                    <a href="#">Новости</a>
                  </span>
                  <span className={styles.bottomLinks}>
                    <a href="#">Истории</a>
                  </span>
                  <span className={styles.bottomLinks}>
                    <a href="#">Биографии</a>
                  </span>
                  <span className={styles.bottomLinks}>
                    <a href="#">???</a>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default SectionHeader;

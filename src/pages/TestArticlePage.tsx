import styles from "./MainPage.module.css";
import NewsCol from "../components/NewsCol";
import ArticleModel from "../components/ArticleModel";

function TestArticlePage() {
  return (
    <div className={styles.mainPage}>
      <div className={styles.leftColumn}>
        <ArticleModel />
      </div>
      <div className={styles.verticalDivider}></div>
      <div className={styles.rightColumn}>
        <NewsCol />
      </div>
    </div>
  );
}

export default TestArticlePage;

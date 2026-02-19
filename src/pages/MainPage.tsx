import styles from "./MainPage.module.css";
import MainContent from "../components/MainContent";
import NewsCol from "../components/NewsCol";

function MainPage() {
  return (
    <div className={styles.mainPage}>
      <div className={styles.leftColumn}>
        <MainContent />
      </div>
      <div className={styles.verticalDivider}></div>
      <div className={styles.rightColumn}>
        <NewsCol />
      </div>
    </div>
  );
}

export default MainPage;

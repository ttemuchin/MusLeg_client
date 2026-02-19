import styles from "./MainPage.module.css";
import NewsCol from "../components/NewsCol";
import SectionModel from "../components/SectionModel";

function MusicSectionPage() {
  return (
    <div className={styles.mainPage}>
      <div className={styles.leftColumn}>
        <SectionModel />
      </div>
      <div className={styles.verticalDivider}></div>
      <div className={styles.rightColumn}>
        <NewsCol />
      </div>
    </div>
  );
}

export default MusicSectionPage;

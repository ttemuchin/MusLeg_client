import styles from "./MainHeader.module.css";

function MainHeader() {
  return (
    <>
      <header className={styles.backcover}>
        <div className={styles.header}>
          <div className={styles.leftColumn}>
            <a href="#" className={styles.titleLink}>
              <h1 className={styles.title}>MUSIC LEGENDS</h1>
              <h2 className={styles.subtitle}>ONLINE MAGAZINE</h2>
            </a>
            <hr />
          </div>
          <div className={styles.verticalDivider}></div>
          <div className={styles.rightColumn}>
            <div className={styles.field}>
              <div className={styles.topLinks}>
                <a href="#">Музыка</a>
                <a href="#">Кино</a>
                <a href="#">Литература</a>
                <a href="#">Тесты</a>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default MainHeader;

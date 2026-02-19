import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.headerSection}>
          <h2 className={styles.title}>MUSIC LEGENDS</h2>
          <h3 className={styles.subtitle}>ONLINE MAGAZINE</h3>
        </div>

        <hr className={styles.divider} />

        <div className={styles.linksRow}>
          <a href="#">Редакция</a>
          <a href="#">Рекламодателям</a>
          <a href="#">Вакансии</a>
          <a href="#">Политика конфиденциальности</a>
          <a href="#">Редакционная политика</a>
        </div>

        <div className={styles.complexRow}>
          <div className={styles.photosColumn}>
            <a href="#">
              <img src="src\assets\socnets\newyou.jpg" alt="Photo 1" />
            </a>
            <a href="#">
              <img src="src\assets\socnets\newtg2.jpg" alt="Photo 2" />
            </a>
            <a href="#">
              <img src="src\assets\socnets\newvk3.jpg" alt="Photo 3" />
            </a>
            <a href="#">
              <img src="src\assets\socnets\newdzen.jpg" alt="Photo 4" />
            </a>
            <a href="#">
              <img src="src\assets\socnets\newinst2.jpg" alt="Photo 5" />
            </a>
          </div>

          <div className={styles.contactColumn}>
            <button className={styles.contactButton}>Связаться с нами</button>
            <button className={styles.interestButton}>Напишите, что вас интересует</button>
          </div>

          <div className={styles.imageColumn}>
            <img src="src\assets\socnets\18age.png" alt="Icon" className={styles.footerIcon} />
          </div>
        </div>

        <div className={styles.centerText}>
          <p>Все права защищены. Перепечатка материалов данного сайта возможна только с письменного разрешения.</p>
          <p>При цитировании ссылка на muslegends.com обязательна. Обратная связь: muslegends@mail.ru</p>
          <p>ИП Быков Д.А.</p>
          <p>ОГРН/ОГРНИП: 320121500017421 ИНН: 120705594101</p>
        </div>

        <div className={styles.bottomRow}>
          <p className={styles.copyright}>*Социальная сеть Instagram, Meta запрещена на территории РФ</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

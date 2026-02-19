import styles from "./NewsCol.module.css";

function NewsCol() {
  const newsItems = [
    {
      id: 1,
      image: "src/assets/kim-wilde-closer.jpg",
      caption: "Новый альбом выходит на следующей неделе",
      date: "09.09",
    },
    {
      id: 2,
      image: "src/assets/small2.jpg",
      caption: "Концерт в поддержку нового релиза",
      date: "09.09",
    },
    {
      id: 3,
      image: "src/assets/small3.jpg",
      caption: "Эксклюзивное интервью с артистом",
      date: "09.09",
    },
    {
      id: 4,
      image: "src/assets/small3.jpg",
      caption: "Эксклюзивное интервью с артистом",
      date: "09.09",
    },
  ];

  return (
    <div className={styles.newsCol}>
      <h3 className={styles.newsTitle}>Последние новости</h3>

      {newsItems.map((item) => (
        <a key={item.id} href="#" className={styles.newsItem}>
          <img src={item.image} className={styles.newsImage} />

          <p className={styles.newsCaption}>{item.caption}</p>
          <p className={styles.newsDate}>{item.date}</p>
        </a>
      ))}

      <a href="#" className={styles.newsButton}>
        Больше новостей
      </a>
    </div>
  );
}

export default NewsCol;

import styles from "./MainContent.module.css";

function MainContent() {
  const relatedArticles = [
    {
      id: 1,
      image: "src/assets/related1.png",
      caption: "Main2",
      label: "Че то там",
    },
    {
      id: 2,
      image: "src/assets/related2.png",
      caption: "Main3",
      label: "Че то там 2",
    },
  ];

  return (
    <div className={styles.mainContent}>
      <h2 className={styles.caption}>Популярное:</h2>

      <div className={styles.mainContainer}>
        <img src="\src\assets\3907b58b-2c49-4e17-8fc2-a966a29ddbe7.jpg" className={styles.mainImage} />
        <span className={styles.imageLabel}>Новости</span>
        <h2 className={styles.mainTitle}>Не стало Марианны Фейтфулл</h2>
        <h2 className={styles.mainSubtitle}>Ей было 78 лет</h2>
      </div>

      <div className={styles.mainItems}>
        {relatedArticles.map((item) => (
          <a key={item.id} href="#" className={styles.mainItem}>
            <img src={item.image} className={styles.itemImage} />
            <span className={styles.imageLabel}>{item.label}</span>
            <p className={styles.itemCaption}>{item.caption}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default MainContent;

import styles from "./SectionModel.module.css";

function SectionModel() {
  const relatedArticles = [
    {
      id: 1,
      image: "src/assets/related1.png",
      caption: "Main2",
    },
    {
      id: 2,
      image: "src/assets/related2.png",
      caption: "Main3",
    },
  ];

  return (
    <div className={styles.mainContent}>
      <h2 className={styles.sectionName}>Музыка</h2>
      <h2 className={styles.caption}>Всё о музыке музыке музыке музыке музыке</h2>

      <div className={styles.mainContainer}>
        <img src="\src\assets\3907b58b-2c49-4e17-8fc2-a966a29ddbe7.jpg" className={styles.mainImage} />
        <h2 className={styles.mainTitle}>Не стало Марианны Фейтфулл</h2>
        <h2 className={styles.mainSubtitle}>Ей было 78 лет</h2>
      </div>

      <div className={styles.mainItems}>
        {relatedArticles.map((item) => (
          <a key={item.id} href="#" className={styles.mainItem}>
            <img src={item.image} className={styles.itemImage} />
            <p className={styles.itemCaption}>{item.caption}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default SectionModel;

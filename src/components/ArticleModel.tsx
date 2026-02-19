import styles from "./ArticleModel.module.css";

function ArticleModel() {
  const relatedArticles = [
    {
      id: 1,
      image: "src/assets/related1.png",
      caption: "Blur и Oasis снова поссорились",
    },
    {
      id: 2,
      image: "src/assets/related2.png",
      caption: "Секрет успеха The Hollies",
    },
    {
      id: 3,
      image: "src/assets/related3.png",
      caption: "Тайна гибели Гленна Миллера",
    },
    {
      id: 4,
      image: "src/assets/related3.png",
      caption: "4 Тайна гибели Гленна Миллера",
    },
    {
      id: 5,
      image: "src/assets/related3.png",
      caption: "5 Тайна гибели Гленна Миллера",
    },
  ];

  return (
    <div className={styles.mainContent}>
      <h1 className={styles.title}>Как Эрик Клэптон поучаствовал в написании «Here Comes the Sun»</h1>
      <h2 className={styles.subtitle}>И какую песню Cream ему помог написать Харрисон?</h2>
      <p className={styles.author}>
        <b>Автор:</b> Джессика Леонидова
      </p>

      <div className={styles.imageContainer}>
        <img src="src/assets/fdf2bdf3-c637-4fe8-893a-13dc71a277fb.jpg" className={styles.mainImage} />
      </div>

      <div className={styles.content}>
        <p>
          Один из интересных фактов в нашей подборке про Эрика Клэптона - это то, что известный гитарист сыграл в
          битловской While My Guitar Gently Weeps, что в целом считается вопиющим случаем - кто кроме битлов мог играть
          в их собственных песнях? Однако дружба с Харрисоном и собственный талант стали некими дверями в завесу тайны
          студийной записи ливерпульской четверки.
        </p>
        <p>
          Интересно, что на While My Guitar Gently Weeps сотрудничество Джорджа и Эрика не закончилось. Во время работы
          Клэптона в Cream, Харрисон помог ему написать слова к одному из крупнейших хитов группы «Badge». «Каждый из
          них должен был придумать песню для этого альбома Goodbye, а Эрик не написал ее», - вспоминал Харрисон. К
          слову, строчку о лебедях в парке придумал Ринго Старр.
        </p>
        <p>
          Текст песни отражает радость автора от прихода весны и временную передышку от деловых дел группы. «Here Comes
          the Sun» стала очаровательным вкладом в последнюю совместную пластинку ливерпульской четверки и неким символом
          самого радостного времени года.
        </p>
      </div>

      <hr className={styles.divider} />

      <h3 className={styles.relatedTitle}>Популярные статьи</h3>

      <div className={styles.relatedImages}>
        {relatedArticles.map((item) => (
          <a key={item.id} href="#" className={styles.relatedItem}>
            <img src={item.image} className={styles.relatedImage} />
            <p className={styles.relatedCaption}>{item.caption}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ArticleModel;

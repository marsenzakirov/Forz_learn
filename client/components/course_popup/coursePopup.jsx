import styles from "./coursePopup.module.css";
const popup = ({ active, setActive, item }) => {
  return (
    <div
      className={active ? styles.popup + " " + styles.active : styles.popup}
      onClick={(e) => {
        if (e.target.className == styles.popup + " " + styles.active) {
          setActive(false);
        }
      }}
    >
      <div className={styles.popup__content}>
        <h1 className={styles.title}>{item.title}</h1>
        <p className={styles.dscrp}>
          Lorem ipsum dolor sit amet. Et velit quas et dicta soluta aut error
          deleniti sit dolorem quibusdam tempore sapiente. Qui odio maxime et
          voluptatem facilis ut delectus architecto sed facilis consequatur At
          iure blanditiis id dolorum eius. Sed molestiae voluptas et laudantium
          nihil sit omnis magnam sed eligendi aut tenetur libero est excepturi
          quia. Eos asperiores enim ea mollitia quos hic impedit pariatur et
          consectetur dolorem aut quod sunt sed eius fuga. Et iure molestias a
          architecto iste ut dolore ratione et minus ducimus ab internos maxime
          qui porro dicta ut suscipit nemo. Aspernatur nostrum est distinctio
          quia non molestias velit sit internos magni et odio nihil et ipsam
          consequatur.
        </p>
        <form className={styles.form}>
          <input
            type="text"
            placeholder="Введите промокод (если он есть)"
            className={styles.input}
          />
          <button className={styles.button}>Активировать</button>
        </form>
        <div className={styles.rezult}>
          <p className={styles.rezult_text}>промокод 0руб</p>
          <p className={styles.rezult_text}>Скидка 0р</p>
          <p className={styles.rezult_text}>Общая цена {item.cost}</p>
          <button className={styles.rezult_button}>купить</button>
        </div>
      </div>
    </div>
  );
};
export default popup;

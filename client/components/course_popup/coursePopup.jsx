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
        <p className={styles.dscrp}>{item.full_description}</p>
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

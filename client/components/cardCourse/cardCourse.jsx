import styles from "./cardCourse.module.css";
import CoursePopup from "../course_popup/coursePopup";
const Card = ({ item, setPopupActive, popupActive }) => {
  return (
    <li className={styles.courses__item}>
      <h2 className={styles.course_title}>{item.title}</h2>
      <h2 className={styles.course_title}>{item.cost}р</h2>
      <p className={styles.course_description}>{item.dscrp}</p>
      <button
        className={styles.course_button}
        onClick={() => {
          setPopupActive(true);
        }}
      >
        Купить
      </button>
      {popupActive && (
        <CoursePopup
          active={popupActive}
          setActive={setPopupActive}
          item={item}
        ></CoursePopup>
      )}
    </li>
  );
};
export default Card;

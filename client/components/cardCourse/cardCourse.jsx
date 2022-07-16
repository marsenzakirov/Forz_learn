import styles from "./cardCourse.module.css";
import CoursePopup from "../course_popup/coursePopup";
import { useState } from "react";
import Link from "next/link";
const Card = ({ item, isbought = false }) => {
  let [popupActive, setPopupActive] = useState(false);

  return (
    <li className={styles.courses__item}>
      <h2 className={styles.course_title}>{item.title}</h2>
      <h2 className={styles.course_title}>{item.cost}р</h2>
      <p className={styles.course_description}>{item.description}</p>

      {popupActive && !isbought && (
        <>
          <button
            className={styles.course_button}
            onClick={() => {
              setPopupActive(true);
            }}
          >
            Купить
          </button>
          <CoursePopup
            active={popupActive}
            setActive={setPopupActive}
            item={item}
          ></CoursePopup>
        </>
      )}
      {isbought && <button className={styles.course_button}>Перейти</button>}
    </li>
  );
};
export default Card;

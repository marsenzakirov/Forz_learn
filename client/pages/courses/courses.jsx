import styles from "./courses.module.css";
import { useEffect, useState } from "react";
import CardCourse from "../../components/cardCourse/cardCourse";
import { VisibleContext } from "../_app";
import { getCourses } from "../../action/course";
export default function Courses() {
  const [courses, setCourses] = useState([])
  useEffect(() => {
    async function getCoursesMy() {
      setCourses(await getCourses());
    }
    getCoursesMy();
  }, [])
  return (
    <>
      <div className="container">
        <div className={styles.courses}>
          <h1 className={styles.title}>курсы</h1>
          <ul className={styles.courses_list}>
            {courses.map((card, index) => {
              return <CardCourse item={card} key={index} />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

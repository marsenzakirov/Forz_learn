import { VisibleContext } from "../_app";
import Link from "next/link";
import { useContext } from "react";
import styles from "./myCourses.module.css";
import CardCourse from "../../components/cardCourse/cardCourse";
import { useState } from "react";
const MyCourses = () => {
  const { user, setUser } = useContext(VisibleContext);
  const [courses, setCourses] = useState(user.courses);

  console.log(courses);
  return (
    <div>
      <div className="container">
        <div className={styles.myCourses}>
          <div className={styles.myCourses_header}>
            <h1 className={styles.myCourses_title}>Мои курсы</h1>
          </div>
          <div className={styles.myCourses_content}>
            <ul className={styles.courses__list}>
              {courses?.map((course, id) => {
                return <CardCourse item={course} key={id} isbought={true}/>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyCourses;

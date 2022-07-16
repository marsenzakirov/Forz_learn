import styles from "./index.module.css";
import CardCourse from "../components/cardCourse/cardCourse";
import { useEffect, useState } from "react";
import { getCourses } from "../action/course";
const Index = () => {
  const [popularCourses, setPopularCourses] = useState([]);
  useEffect(() => {
    async function getCoursesMy() {
      setPopularCourses(await getCourses());
      console.log(popularCourses);
    }
    getCoursesMy();
  }, []);

  return (
    <div className={styles.main}>
      <div className="container">
        <section className={styles.block}>
          <h1 className={styles.title}>Популярные курсы</h1>
          <ul className={styles.courses_list}>
            {popularCourses?.slice(0, 3).map((course, id) => {
              return <CardCourse item={course} key={id} />;
            })}
          </ul>
        </section>
      </div>
    </div>
  );
};
export default Index;

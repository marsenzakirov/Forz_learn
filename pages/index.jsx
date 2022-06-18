import Header from "../components/header/header";
import SideBar from "../components/sidebar/sidebar";
import styles from "./index.module.css";
const Index = () => {
  return (
    <>
      <Header />
      <SideBar />
      <main>
        <div className="container">
          <section className={styles.block}>
            <h1 className={styles.title}>Популярные курсы</h1>
            <ul className={styles.courses_list}>
              <li className={styles.courses__item}>
                <h2 className={styles.course_title}>C++ light</h2>
                <h2 className={styles.course_title}>300р</h2>
                <p className={styles.course_description}>
                  На этом курсе вы ознокомитесь с основной базой с++. Этих
                  знаний будет достаточно, чтобы решать задания ЕГЭ по
                  информатике.
                </p>
                <button className={styles.course_button}>Купить</button>
              </li>
              <li className={styles.courses__item}>
                <h2 className={styles.course_title}>C++ light</h2>
                <h2 className={styles.course_title}>300р</h2>
                <p className={styles.course_description}>
                  На этом курсе вы ознокомитесь с основной базой с++. Этих
                  знаний будет достаточно, чтобы решать задания ЕГЭ по
                  информатике.
                </p>
                <button className={styles.course_button}>Купить</button>
              </li>
              <li className={styles.courses__item}>
                <h2 className={styles.course_title}>C++ light</h2>
                <h2 className={styles.course_title}>300р</h2>
                <p className={styles.course_description}>
                  На этом курсе вы ознокомитесь с основной базой с++. Этих
                  знаний будет достаточно, чтобы решать задания ЕГЭ по
                  информатике.
                </p>
                <button className={styles.course_button}>Купить</button>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
};
export default Index;

import styles from "./sidebar..module.css";
import Link from "next/link";


function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Link href="/">
        <a className={styles.sidebar__logo}>F обучение</a>
      </Link>
      <nav className={styles["sidear-nav"]}>
        <ul className={styles["sidebar-list"]}>
          <li className={styles.sidebar__item}>
            <Link href="/courses">
              <a>
                <img
                  src="img/header/learn.svg"
                  alt="Picture of the author"
                  width="32px"
                  height="32px"
                />
                <h2 className={styles.sidebar__link}>Курсы</h2>
              </a>
            </Link>
          </li>
          <li className={styles.sidebar__item}>
            <Link href="/ege">
              <a>
                <img
                  src={"img/header/tasks.svg"}
                  alt="Picture of the author"
                  width="32px"
                  height="32px"
                />
                <h2 className={styles.sidebar__link}>ЕГЭ</h2>
              </a>
            </Link>
          </li>
          <li className={styles.sidebar__item}>
            <Link href="/tasks">
              <a>
                <img
                  src="img/header/variant.svg"
                  alt="Picture of the author"
                  width="32px"
                  height="32px"
                />
                <h2 className={styles.sidebar__link}>Задачи</h2>
              </a>
            </Link>
          </li>
        </ul>
        <ul className={styles["sidebar-list"]}>
          <li className={styles.sidebar__item}>
            <Link href="/1">
              <a>
                <img
                  src="img/header/vk.svg"
                  alt="Picture of the author"
                  width="32px"
                  height="32px"
                />
                <h2 className={styles.sidebar__link}>Группа</h2>
              </a>
            </Link>
          </li>
          <li className={styles.sidebar__item}>
            <Link href="/1">
              <a>
                <img
                  src="img/header/youtube.svg"
                  alt="Picture of the author"
                  width="32px"
                  height="32px"
                />
                <h2 className={styles.sidebar__link}>Канал</h2>
              </a>
            </Link>
          </li>
          <li className={styles.sidebar__item}>
            <Link href="/1">
              <a>
                <img
                  src="img/header/telegram.svg"
                  alt="Picture of the author"
                  width="32px"
                  height="32px"
                />
                <h2 className={styles.sidebar__link}>Чат</h2>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;

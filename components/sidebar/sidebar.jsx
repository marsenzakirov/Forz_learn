import styles from "./sidebar..module.css";
import Link from "next/link";
import Image from "next/image";
import vk_icon from "../../img/header/vk.svg";
import telegram_icon from "../../img/header/telegram.svg";
import youtube_icon from "../../img/header/youtube.svg";
import tasks_icon from "../../img/header/tasks.svg";
import variant_icon from "../../img/header/variant.svg";
import learn_icon from "../../img/header/learn.svg";

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
                <Image
                  src={learn_icon}
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
                <Image
                  src={tasks_icon}
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
                <Image
                  src={variant_icon}
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
                <Image
                  src={vk_icon}
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
                <Image
                  src={youtube_icon}
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
                <Image
                  src={telegram_icon}
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

import styles from "./header.module.css";
import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { logout } from "../../action/user";
import { changePassword } from "../../action/user";

function Header({ setIsVisible, setIsAuthenticated, user }) {
  const [input, setInput] = useState("");
  const [profileOpened, setProfileOpened] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles["header-container"]}>
        {profileOpened && (
          <div
            className={styles["click-block"]}
            onClick={() => {
              setProfileOpened(false);
            }}
          ></div>
        )}
        <div className={styles["header-block"]}>
          <div
            className={
              styles.search +
              " " +
              (input.length > 0 ? styles.search__open : "")
            }
          >
            <img
              src="img/header/search-icon.svg"
              alt="Picture of the author"
              width="47px"
              height="47px"
            />
            <input
              type="search"
              className={styles.search__input}
              placeholder="Поиск заданий"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
          </div>
          <div
            className={styles.profile}
            onClick={() => {
              setProfileOpened((prev) => !prev);
            }}
          >
            <div className={styles.profile__logo}>
              <img
                src="img/header/user-solid.svg"
                alt="Picture of the author"
                width="30px"
                height="30px"
              />
            </div>
            <h2 className={styles.profile__name}>{user.user}</h2>
            <AnimatePresence>
              {profileOpened ? (
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 90 }}
                  exit={{ rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="img/header/header-arrow.svg"
                    alt="Picture of the author"
                    width="20px"
                    height="20px"
                    className={styles.profile__arrow}
                  />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ rotate: 90 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="img/header/header-arrow.svg"
                    alt="Picture of the author"
                    width="20px"
                    height="20px"
                    className={styles.profile__arrow}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {profileOpened ? (
                <motion.nav
                  className={styles.nav}
                  initial={{ height: "0px" }}
                  animate={{ height: "auto" }}
                  exit={{ height: "0px" }}
                  transition={{ duration: 0.3 }}
                >
                  <ul className={styles["nav-list"]}>
                    <li className={styles.nav__item}>
                      <Link href="#">
                        <a>Личный кабинет</a>
                      </Link>
                    </li>
                    <li className={styles.nav__item}>
                      <Link href="setting">
                        <a>Настройки</a>
                      </Link>
                    </li>
                    <li className={styles.nav__item}>
                      <Link href="/myCourses">
                        <a>Мои курсы</a>
                      </Link>
                    </li>
                    <li className={styles.nav__item}>
                      <Link href="/sign">
                        <a
                          onClick={() => {
                            logout(setIsAuthenticated, setIsVisible);
                          }}
                        >
                          Выйти
                        </a>
                      </Link>
                    </li>
                  </ul>
                </motion.nav>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;

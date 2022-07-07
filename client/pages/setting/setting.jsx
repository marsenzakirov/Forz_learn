import styles from "./setting.module.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { VisibleContext } from "../_app";
import Input from "../../components/input/input";
import { changePassword, changeEmail, deleteAccount } from "../../action/user";
const Setting = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const [errorChangePassword, setErrorChangePassword] = useState("");
  const [changePasswordOldPassword, setChangePasswordOldPassword] =
    useState("");
  const [changePasswordNewPassword, setChangePasswordNewPassword] =
    useState("");

  const [errorChangeEmail, setErrorChangeEmail] = useState("");
  const [changeEmailNewEmail, setChangeEmailNewEmail] = useState("");
  const [changeEmailPassword, setChangeEmailPassword] = useState("");
  const [
    changePasswordNewConfirmPassword,
    setChangePasswordNewConfirmPassword,
  ] = useState("");

  const [deleteAccountPassword, setDeleteAccontPassword] = useState("");
  const [errorDeleteAccount, setErrorDeleteAccont] = useState("");

  const { user, setUser } = useContext(VisibleContext);
  return (
    <div className="container">
      <div className={styles.setting}>
        <div className={styles.setting_header}>
          <h1 className={styles.setting_title}>Общее</h1>
        </div>
        <div className={styles.setting_body}>
          <div className={styles.setting_line}>
            <h2 className={styles.setting_line_title}>Пароль</h2>
            <p className={styles.setting_line_text}></p>
            {isOpen1 ? (
              <button
                className={styles.setting_line_button}
                onClick={() => setIsOpen1(false)}
              >
                Отмена
              </button>
            ) : (
              <button
                className={styles.setting_line_button}
                onClick={() => setIsOpen1(true)}
              >
                Изменить
              </button>
            )}
          </div>
          <AnimatePresence>
            {isOpen1 && (
              <motion.div
                className={styles.setting_changes_block}
                initial={{ height: 0 }}
                animate={{ height: "fit-content" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.setting_row}>
                  <h3>старый пароль</h3>
                  <Input
                    type="password"
                    className={styles.setting_input}
                    value={changePasswordOldPassword}
                    setValue={setChangePasswordOldPassword}
                  />
                </div>
                <div className={styles.setting_row}>
                  <h3>новый пароль</h3>
                  <Input
                    type="password"
                    className={styles.setting_input}
                    value={changePasswordNewPassword}
                    setValue={setChangePasswordNewPassword}
                  />
                </div>
                <div className={styles.setting_row}>
                  <h3>подтвердите новый пароль</h3>
                  <Input
                    type="password"
                    className={styles.setting_input}
                    value={changePasswordNewConfirmPassword}
                    setValue={setChangePasswordNewConfirmPassword}
                  />
                </div>
                <div className={styles.error}>{errorChangePassword}</div>

                <button
                  onClick={() => {
                    changePassword(
                      changePasswordOldPassword,
                      changePasswordNewPassword,
                      changePasswordNewConfirmPassword,
                      setErrorChangePassword
                    );
                    setChangePasswordNewConfirmPassword("");
                    setChangePasswordNewPassword("");
                    setChangePasswordOldPassword("");
                  }}
                  className={styles.setting_button}
                >
                  Отправить
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <div className={styles.setting_line}>
            <h2 className={styles.setting_line_title}>Почта</h2>
            <p className={styles.setting_line_text}>{user.email}</p>
            {isOpen2 ? (
              <button
                className={styles.setting_line_button}
                onClick={() => setIsOpen2(false)}
              >
                Отмена
              </button>
            ) : (
              <button
                className={styles.setting_line_button}
                onClick={() => setIsOpen2(true)}
              >
                Изменить
              </button>
            )}
          </div>
          <AnimatePresence>
            {isOpen2 && (
              <motion.div
                className={styles.setting_changes_block}
                initial={{ height: 0 }}
                animate={{ height: "fit-content" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.setting_row}>
                  <h3>Новая почта</h3>
                  <Input
                    type="email"
                    className={styles.setting_input}
                    value={changeEmailNewEmail}
                    setValue={setChangeEmailNewEmail}
                  />
                </div>
                <div className={styles.setting_row}>
                  <h3>Пароль</h3>
                  <Input
                    type="password"
                    className={styles.setting_input}
                    value={changeEmailPassword}
                    setValue={setChangeEmailPassword}
                  />
                </div>
                <div className={styles.error}>{errorChangeEmail}</div>

                <button
                  onClick={() => {
                    changeEmail(
                      changeEmailNewEmail,
                      changeEmailPassword,
                      setErrorChangeEmail
                    );
                    setChangeEmailPassword("");
                    setChangeEmailNewEmail("");
                  }}
                  className={styles.setting_button}
                >
                  Отправить
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          <div className={styles.setting_line}>
            <h2 className={styles.setting_line_title}>Удалить аккаунт</h2>
            <p className={styles.setting_line_text}></p>
            {isOpen3 ? (
              <button
                className={styles.setting_line_button}
                onClick={() => setIsOpen3(false)}
              >
                Отмена
              </button>
            ) : (
              <button
                className={styles.setting_line_button}
                onClick={() => setIsOpen3(true)}
              >
                Удалить
              </button>
            )}
          </div>
          <AnimatePresence>
            {isOpen3 && (
              <motion.div
                className={styles.setting_changes_block}
                initial={{ height: 0 }}
                animate={{ height: "fit-content" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.setting_row}>
                  <h3>Пароль</h3>
                  <Input
                    type="password"
                    className={styles.setting_input}
                    value={deleteAccountPassword}
                    setValue={setDeleteAccontPassword}
                  />
                </div>
                <div className={styles.error}>{errorDeleteAccount}</div>

                <button
                  onClick={() => {
                    deleteAccount(deleteAccountPassword, setErrorDeleteAccont);
                    setDeleteAccontPassword("");
                  }}
                  className={styles.setting_button}
                >
                  Удалить
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
export default Setting;

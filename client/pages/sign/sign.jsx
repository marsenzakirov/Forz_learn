import { createContext, useContext, useState } from "react";
import { VisibleContext } from "../_app";
import Router from "next/router";
import Input from "../../components/input/input";
import styles from "./sign.module.css";

import { login, registration } from "../../action/user";
import { useEffect } from "react";
const Sign = () => {
  const { setIsVisible, setIsAuthenticated, setUser } =
    useContext(VisibleContext);
  useEffect(() => {
    setIsVisible(false);
  }, []);
  const [signUpMode, setSignUpMode] = useState(false);
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const [errorLogin, setErrorLogin] = useState("");
  const [errorRegistration, setErrorRegistration] = useState("");
  const [successfullyRegistration, setSuccessfullyRegistration] =
    useState(false);

  const [emailRegistration, setEmailRegistration] = useState("");
  const [usernameRegistration, setUsernameRegistration] = useState("");
  const [passwordRegistration, setPasswordRegistration] = useState("");
  const [confirmPasswordRegistration, setConfirmPasswordRegistration] =
    useState("");

  const changeContainerClass = () => {
    setSignUpMode(!signUpMode);
  };

  useEffect(() => {
    if (successfullyRegistration) {
      setEmailRegistration("");
      setUsernameRegistration("");
      setPasswordRegistration("");
      setConfirmPasswordRegistration("");
      setSuccessfullyRegistration(false);
    }
  }, [successfullyRegistration]);
  return (
    <>
      <div
        className={
          styles.container +
          " " +
          (signUpMode == true ? styles.sign_up_mode : "")
        }
      >
        <div className={styles.forms_container}>
          <div className={styles.signin_signup}>
            <form
              action=""
              className={styles.sing_in_form + " " + styles.form}
              onSubmit={(e) => e.preventDefault()}
            >
              <h2 className={styles.title}>войти</h2>
              <div className={styles.input_field}>
                <img
                  src="img/header/user.svg"
                  alt="Picture of the author"
               
                  className={styles.input_field__img}
                />
                <Input
                  type="email"
                  placeholder="почта"
                  value={emailLogin}
                  setValue={setEmailLogin}
                />
              </div>
              <div className={styles.input_field}>
                <img
                  src="img/header/lock.svg"
                  alt="Picture of the author"
               
                  className={styles.input_field__img}
                />
                <Input
                  type="password"
                  placeholder="пароль"
                  name="password"
                  value={passwordLogin}
                  setValue={setPasswordLogin}
                />
              </div>
              <p className={styles.error}>{errorLogin}</p>
              <input
                type="submit"
                value="Войти"
                className={styles.btn}
                onClick={async () => {
                  login(
                    emailLogin,
                    passwordLogin,
                    setIsAuthenticated,
                    setIsVisible,
                    setErrorLogin
                  );
                }}
              />
            </form>
            <form
              action="*"
              className={styles.sing_up_form + " " + styles.form}
              method="POST"
              onSubmit={(e) => e.preventDefault()}
            >
              <h2 className={styles.title}>Регистрация</h2>
              <div className={styles.input_field}>
                <img
                  src="img/header/email.svg"
                  alt="Picture of the author"
               
                  className={styles.input_field__img}
                />
                <Input
                  type="email"
                  placeholder="почта"
                  name="email"
                  value={emailRegistration}
                  setValue={setEmailRegistration}
                />
              </div>
              <div className={styles.input_field}>
                <img
                  src="img/header/user.svg"
                  alt="Picture of the author"
               
                  className={styles.input_field__img}
                />
                <Input
                  type="text"
                  placeholder="пользователь"
                  value={usernameRegistration}
                  setValue={setUsernameRegistration}
                  name="user"
                />
              </div>
              <div className={styles.input_field}>
                <img
                  src="img/header/lock.svg"
                  alt="Picture of the author"
               
                  className={styles.input_field__img}
                />
                <Input
                  type="password"
                  placeholder="пароль"
                  name="password"
                  value={passwordRegistration}
                  setValue={setPasswordRegistration}
                />
              </div>
              <div className={styles.input_field}>
                <img
                  src="img/header/lock.svg"
                  alt="Picture of the author"
               
                  className={styles.input_field__img}
                />
                <Input
                  type="password"
                  placeholder="подтвердите пароль"
                  name="confirm_password"
                  value={confirmPasswordRegistration}
                  setValue={setConfirmPasswordRegistration}
                />
              </div>
              <p className={styles.error}>
                {successfullyRegistration == true
                  ? "Вы успешно зарегистрировались"
                  : errorRegistration}
              </p>

              <input
                type="submit"
                value="Регистрация"
                className={styles.btn}
                onClick={async () => {
                  if (
                    (await registration(
                      emailRegistration,
                      usernameRegistration,
                      passwordRegistration,
                      confirmPasswordRegistration,
                      setErrorRegistration
                    )) == true
                  ) {
                    setSuccessfullyRegistration(true);
                  }
                }}
              />
            </form>
          </div>
        </div>
        <div className={styles.panels_container}>
          <div className={styles.panel + " " + styles.left_panel}>
            <div className={styles.content}>
              <h3 className={styles.content_title}>У вас нет аккаунта?</h3>
              <button
                className={styles.btn + " " + styles.transparent}
                onClick={() => changeContainerClass()}
              >
                Зарегитрироваться
              </button>
            </div>
            <img
              src="img/header/register.svg"
              alt="Picture of the author"
              className={styles.input_field__img}
            />
          </div>
          <div className={styles.panel + " " + styles.right_panel}>
            <div className={styles.content}>
              <h3 className={styles.content_title}>У вас есть аккаунт?</h3>
              <button
                className={styles.btn + " " + styles.transparent}
                onClick={() => changeContainerClass()}
              >
                Войти
              </button>
            </div>
            <img
              src="img/header/log.svg"
              alt="Picture of the author"
              className={styles.input_field__img}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sign;

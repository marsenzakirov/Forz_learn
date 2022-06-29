import axios from "axios";
import { useContext } from "react";
import { useCookies } from "react-cookie";
export const registration = async (
  email,
  user,
  password,
  confirmPassword,
  setErrorRegistration
) => {
  if (password == confirmPassword) {
    if (password.length <= 6) {
      setErrorRegistration("Пароль должен быть больше 6 символов");
      return;
    }
    if (user.length <= 3) {
      setErrorRegistration("Имя пользователя должно быть больше 3 символов");
      return;
    }
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/authentication/register/",
        {
          email,
          user,
          password,
        }
      );
      setErrorRegistration("Вы успешно зарегистрировались");
      return true;
    } catch (error) {
      setErrorRegistration(error.response.data.email);
      return;
    }
  } else {
    setErrorRegistration("Пароли не совпадают");
  }
};

export async function login(
  email,
  password,
  setIsAuthenticated,
  setIsVisible,
  setErrorLogin
) {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/authentication/login/",
      {
        email,
        password,
      }
    );
    if (response.statusText == "OK") {
      localStorage.setItem("token", response.data.access);
      setIsAuthenticated(!!response.data.access);
      setIsVisible(true);
    }
  } catch (error) {
    setErrorLogin(error.response.data.error);
  }
}
export async function getUser() {
  const token = localStorage.getItem("token");
  try {
    const response = axios
      .get("http://127.0.0.1:8000/api/authentication/user/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        return res.data;
      });
    return response;
  } catch (error) {
    console.log(error);
  }
}
export const logout = (setIsAuthenticated, setIsVisible) => {
  localStorage.removeItem("token");
  setIsAuthenticated(false);
  setIsVisible(false);
};

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
    return null;
  }
}
export const logout = (setIsAuthenticated, setIsVisible) => {
  localStorage.removeItem("token");
  setIsAuthenticated(false);
  setIsVisible(false);
};

export const changePassword = (
  old_password,
  new_password,
  confrim_new_password,
  setErrorChangePassword
) => {
  if (new_password == confrim_new_password) {
    if (new_password.length <= 6) {
      setErrorChangePassword("Новый пароль должен быть больше 6 символов");
      return;
    } else if (old_password == new_password) {
      setErrorChangePassword("Новый пароль не должен совпадать со старым");
      return;
    } else if (old_password.length <= 6) {
      setErrorChangePassword("Старый пароль должен быть больше 6 символов");
      return;
    }
    try {
      const token = localStorage.getItem("token");
      const response = axios
        .post(
          "http://127.0.0.1:8000/api/authentication/change_password/",
          { old_password, new_password },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((res) => {
          setErrorChangePassword(res.data.message);
        });
    } catch (error) {
      setErrorChangePassword(error);
    }
  } else {
    setErrorChangePassword("Пароли не совпадают");
  }
};

export const changeEmail = (email, password, setErrorChangeEmail) => {
  if (password.length <= 6) {
    setErrorChangeEmail("Пароль должен быть больше 6 символов");
    return;
  }

  const token = localStorage.getItem("token");

  const response = axios
    .post(
      "http://127.0.0.1:8000/api/authentication/change_email/",
      {
        email,
        password,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((res) => {
      setErrorChangeEmail(res.data.message);
    })
    .catch((error) => {
      setErrorChangeEmail(error.response.data.error);
    });
};

export const deleteAccount = (password, setErrorDeleteAccount) => {
  if (password.length <= 6) {
    setErrorDeleteAccount("Пароль должен быть больше 6 символов");
    return;
  }
  const token = localStorage.getItem("token");
  const response = axios
    .post(
      "http://127.0.0.1:8000/api/authentication/delete/",
      {
        password,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((res) => {
      setErrorDeleteAccount(res.data.message);
      localStorage.removeItem("token");
    })
    .catch((error) => {
      setErrorDeleteAccount(error.response.data.error);
    });
};

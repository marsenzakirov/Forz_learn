import "../styles/reset.css";
import "../styles/global.css";
import Header from "../components/header/header";
import SideBar from "../components/sidebar/sidebar";
import { useState, createContext } from "react";
import Sign from "./sign/sign";
import { getUser } from "../action/user";
import Router from "next/router";
import { useEffect } from "react";
const VisibleContext = createContext();
export { VisibleContext };

function MyApp({ Component, pageProps }) {
  async function getMe(setUser, user) {
    setUser(await getUser());
  }
  const [isVisible, setIsVisible] = useState(true);

  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [user, setUser] = useState({});

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    const { pathname } = Router;
    if (isAuthenticated == true && (user != null) & (user != {})) {
      Router.push("/");
      getMe(setUser, user);
    }
    if (isAuthenticated == false || user == null) {
      localStorage.removeItem("token");
      Router.push("/sign");
    }
  }, [isAuthenticated]);

  return (
    <VisibleContext.Provider
      value={{
        setIsVisible,
        setIsAuthenticated,
        user,
        setUser,
      }}
    >
      {isVisible && (
        <>
          <Header
            setIsAuthenticated={setIsAuthenticated}
            setIsVisible={setIsVisible}
            user={user}
            setUser={setUser}
          />
          <SideBar />
        </>
      )}
      <Component {...pageProps} />
    </VisibleContext.Provider>
  );
}

export default MyApp;

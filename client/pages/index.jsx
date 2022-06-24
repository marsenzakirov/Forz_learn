import Header from "../components/header/header";
import SideBar from "../components/sidebar/sidebar";
import styles from "./index.module.css";
import CardCourse from "../components/cardCourse/cardCourse";
import { useState } from "react";
const Index = () => {
  const [popularCourses, setPopularCourses] = useState([
    {
      title: "C++ 10light",
      cost: 3020,
      dscrp:
        "На этом курсе вы ознокомитесь с основной базой с++. Этих знаний будет достаточно, чтобы решать задания ЕГЭ по информатике.",
      fullDscrp:
        "Lorem ipsum dolor sit amet. Et velit quas et dicta soluta aut error deleniti sit dolorem quibusdam tempore sapiente. Qui odio maxime et voluptatem facilis ut delectus architecto sed facilis consequatur At iure blanditiis id dolorum eius.Sed molestiae voluptas et laudantium nihil sit omnis magnam sed eligendi aut tenetur libero est excepturi quia. Eos asperiores enim ea mollitia quos hic impedit pariatur et consectetur dolorem aut quod sunt sed eius fuga. Et iure molestias a architecto iste ut dolore ratione et minus ducimus ab internos maxime qui porro dicta ut suscipit nemo. Aspernatur nostrum est distinctio quia non molestias velit sit internos magni et odio nihil et ipsam consequatur. ",
    },
    {
      title: "C++ 12light",
      cost: 3100,
      dscrp:
        "На этом курсе вы ознокомитесь с основной базой с++. Этих знаний будет достаточно, чтобы решать задания ЕГЭ по информатике.",
      fullDscrp:
        "Lorem ipsum dolor sit amet. Et velit quas et dicta soluta aut error deleniti sit dolorem quibusdam tempore sapiente. Qui odio maxime et voluptatem facilis ut delectus architecto sed facilis consequatur At iure blanditiis id dolorum eius.Sed molestiae voluptas et laudantium nihil sit omnis magnam sed eligendi aut tenetur libero est excepturi quia. Eos asperiores enim ea mollitia quos hic impedit pariatur et consectetur dolorem aut quod sunt sed eius fuga. Et iure molestias a architecto iste ut dolore ratione et minus ducimus ab internos maxime qui porro dicta ut suscipit nemo. Aspernatur nostrum est distinctio quia non molestias velit sit internos magni et odio nihil et ipsam consequatur. ",
    },
    {
      title: "C++ 11light",
      cost: 3040,
      dscrp:
        "На этом курсе вы ознокомитесь с основной базой с++. Этих знаний будет достаточно, чтобы решать задания ЕГЭ по информатике.",
      fullDscrp:
        "Lorem ipsum dolor sit amet. Et velit quas et dicta soluta aut error deleniti sit dolorem quibusdam tempore sapiente. Qui odio maxime et voluptatem facilis ut delectus architecto sed facilis consequatur At iure blanditiis id dolorum eius.Sed molestiae voluptas et laudantium nihil sit omnis magnam sed eligendi aut tenetur libero est excepturi quia. Eos asperiores enim ea mollitia quos hic impedit pariatur et consectetur dolorem aut quod sunt sed eius fuga. Et iure molestias a architecto iste ut dolore ratione et minus ducimus ab internos maxime qui porro dicta ut suscipit nemo. Aspernatur nostrum est distinctio quia non molestias velit sit internos magni et odio nihil et ipsam consequatur. ",
    },
    {
      title: "C++ 11light",
      cost: 3040,
      dscrp:
        "На этом курсе вы ознокомитесь с основной базой с++. Этих знаний будет достаточно, чтобы решать задания ЕГЭ по информатике.",
      fullDscrp:
        "Lorem ipsum dolor sit amet. Et velit quas et dicta soluta aut error deleniti sit dolorem quibusdam tempore sapiente. Qui odio maxime et voluptatem facilis ut delectus architecto sed facilis consequatur At iure blanditiis id dolorum eius.Sed molestiae voluptas et laudantium nihil sit omnis magnam sed eligendi aut tenetur libero est excepturi quia. Eos asperiores enim ea mollitia quos hic impedit pariatur et consectetur dolorem aut quod sunt sed eius fuga. Et iure molestias a architecto iste ut dolore ratione et minus ducimus ab internos maxime qui porro dicta ut suscipit nemo. Aspernatur nostrum est distinctio quia non molestias velit sit internos magni et odio nihil et ipsam consequatur. ",
    },
    
  ]);
  return (
    <>
      <Header />
      <SideBar />
      <main className={styles.main}>
        <div className="container">
          <section className={styles.block}>
            <h1 className={styles.title}>Популярные курсы</h1>
            <ul className={styles.courses_list}>
              {popularCourses.map((card, index) => {
                let [popupActive, setPopupActive] = useState(false);
                return (
                  <CardCourse
                    item={card}
                    setPopupActive={setPopupActive}
                    popupActive={popupActive}
                    key={index}
                  />
                );
              })}
            </ul>
          </section>
        </div>
      </main>
    </>
  );
};
export default Index;

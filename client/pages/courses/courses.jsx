import styles from "./courses.module.css";
import { useState } from "react";
import CardCourse from "../../components/cardCourse/cardCourse";
import { VisibleContext } from "../_app";
export default function Courses() {
  const [courses, setCourses] = useState([
    {
      title: "C++ 10light",
      cost: 3020,
      dscrp:
        "На этом курсе вы ознокомитесь с основной базой с++. Этих знаний будет достаточно, чтобы решать задания ЕГЭ по информатике.",
      fullDscrp:
        "Lorem ipsum dolor sit amet. Et velit quas et dicta soluta aut error deleniti sit dolorem quibusdam tempore sapiente. Qui odio maxime et voluptatem facilis ut delectus architecto sed facilis consequatur At iure blanditiis id dolorum eius.Sed molestiae voluptas et laudantium nihil sit omnis magnam sed eligendi aut tenetur libero est excepturi quia. Eos asperiores enim ea mollitia quos hic impedit pariatur et consectetur dolorem aut quod sunt sed eius fuga. Et iure molestias a architecto iste ut dolore ratione et minus ducimus ab internos maxime qui porro dicta ut suscipit nemo. Aspernatur nostrum est distinctio quia non molestias velit sit internos magni et odio nihil et ipsam consequatur. ",
    },
    {
      title: "C++ 10light",
      cost: 3020,
      dscrp:
        "На этом курсе вы ознокомитесь с основной базой с++. Этих знаний будет достаточно, чтобы решать задания ЕГЭ по информатике.",
      fullDscrp:
        "Lorem ipsum dolor sit amet. Et velit quas et dicta soluta aut error deleniti sit dolorem quibusdam tempore sapiente. Qui odio maxime et voluptatem facilis ut delectus architecto sed facilis consequatur At iure blanditiis id dolorum eius.Sed molestiae voluptas et laudantium nihil sit omnis magnam sed eligendi aut tenetur libero est excepturi quia. Eos asperiores enim ea mollitia quos hic impedit pariatur et consectetur dolorem aut quod sunt sed eius fuga. Et iure molestias a architecto iste ut dolore ratione et minus ducimus ab internos maxime qui porro dicta ut suscipit nemo. Aspernatur nostrum est distinctio quia non molestias velit sit internos magni et odio nihil et ipsam consequatur. ",
    },
    {
      title: "C++ 10light",
      cost: 3020,
      dscrp:
        "На этом курсе вы ознокомитесь с основной базой с++. Этих знаний будет достаточно, чтобы решать задания ЕГЭ по информатике.",
      fullDscrp:
        "Lorem ipsum dolor sit amet. Et velit quas et dicta soluta aut error deleniti sit dolorem quibusdam tempore sapiente. Qui odio maxime et voluptatem facilis ut delectus architecto sed facilis consequatur At iure blanditiis id dolorum eius.Sed molestiae voluptas et laudantium nihil sit omnis magnam sed eligendi aut tenetur libero est excepturi quia. Eos asperiores enim ea mollitia quos hic impedit pariatur et consectetur dolorem aut quod sunt sed eius fuga. Et iure molestias a architecto iste ut dolore ratione et minus ducimus ab internos maxime qui porro dicta ut suscipit nemo. Aspernatur nostrum est distinctio quia non molestias velit sit internos magni et odio nihil et ipsam consequatur. ",
    },
    {
      title: "C++ 10light",
      cost: 3020,
      dscrp:
        "На этом курсе вы ознокомитесь с основной базой с++. Этих знаний будет достаточно, чтобы решать задания ЕГЭ по информатике.",
      fullDscrp:
        "Lorem ipsum dolor sit amet. Et velit quas et dicta soluta aut error deleniti sit dolorem quibusdam tempore sapiente. Qui odio maxime et voluptatem facilis ut delectus architecto sed facilis consequatur At iure blanditiis id dolorum eius.Sed molestiae voluptas et laudantium nihil sit omnis magnam sed eligendi aut tenetur libero est excepturi quia. Eos asperiores enim ea mollitia quos hic impedit pariatur et consectetur dolorem aut quod sunt sed eius fuga. Et iure molestias a architecto iste ut dolore ratione et minus ducimus ab internos maxime qui porro dicta ut suscipit nemo. Aspernatur nostrum est distinctio quia non molestias velit sit internos magni et odio nihil et ipsam consequatur. ",
    },
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
  ]);
  return (
    <>
      <div className="container">
        <div className={styles.courses}>
          <h1 className={styles.title}>курсы</h1>
          <ul className={styles.courses_list}>
            {courses.map((card, index) => {
              return <CardCourse item={card} key={index} />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

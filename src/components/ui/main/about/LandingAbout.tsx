import { NextPage } from "next";
import styles from "./LandingAbout.module.scss";

const LandingAbout: NextPage = () => {
  return (
    <section className={styles.about}>
      <div className={styles.data}>
        <div className={styles.stats}>
          <h3>Мы в цифрах</h3>
          <span className={styles.statsrow}>
            <span className={styles.statsblock}>
              <h4>11</h4>
              <p>лет успешной работы</p>
            </span>
            <span className={styles.statsblock}>
              <h4>250</h4>
              <p>
                га рекульти-
                <br />
                вировано
              </p>
            </span>
            <span className={styles.statsblock}>
              <h4>170</h4>
              <p>проектов написано</p>
            </span>
            <span className={styles.statsblock}>
              <h4>3650</h4>
              <p>деревьев посажено</p>
            </span>
          </span>
        </div>
        <div className={styles.feedbacks}>
          <h3>Отзывы наших клиентов</h3>
          <section className={styles.feedbackcol}>
            <div className={styles.feedback}>
              <article>
                Купил у ребят голубую ель в садовом центре. Рассказали, как
                посадить, дали плодородного грунта и после посадки приезжали
                несколько раз напоминали мне, чтобы я её не забыл поливать.
              </article>
              <em>Евгений А.</em>
            </div>
            <div className={styles.feedback}>
              <article>
                Не убирал и не ухаживал за своей территорией у дома, пока она не
                стала превращаться в мелкую свалку. Потом узнал, что есть
                ребята, занимающиеся озеленением. Пара недель и мой участок
                радует глаз! Спасибо!
              </article>
              <em>Александр Ф.</em>
            </div>
          </section>
        </div>
      </div>
      <div className={styles.image} />
    </section>
  );
};

export default LandingAbout;

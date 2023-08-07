import { NextPage } from "next";
import styles from "./MapHero.module.scss";

const MapHero: NextPage = () => {
  return (
    <div className={styles.hero}>
      <span className={styles.text}>
        <em>Свяжитесь с нами</em>
        <span className={styles.headings}>
          <h1>Наши адреса</h1>
          <p>Посетите места расположения нашего предприятия.</p>
        </span>
      </span>
      <section className={styles.addresses}>
        <address>
          <span className={styles.icon}>
            <img src={`/ui/icons/location.svg`} />
          </span>
          <span className={styles.loc}>
            <h4>Садовый центр</h4>
            <p>Ненецкий АО, рп. Искателей, Вертолётный проезд (смотри карту)</p>
          </span>
        </address>
        <address>
          <span className={styles.icon}>
            <img src={`/ui/icons/location.svg`} />
          </span>
          <span className={styles.loc}>
            <h4>Нарьян-Мар</h4>
            <p>
              Ненецкий АО, г.Нарьян-Мар, ул.Ленина, д.6, оф.1 (ТЦ "Тиман"), вход
              с торца, 1 этаж
            </p>
          </span>
        </address>
      </section>
    </div>
  );
};

export default MapHero;

import { NextPage } from "next";
import styles from "./Heading.module.scss";
import Link from "next/link";

const HeroHeading: NextPage = () => {
  return (
    <div className={styles.hero}>
      <span className={styles.top}>
        <em style={{ color: "#084C2E" }}>
          Научно-техническое предприятие «Рубус»
        </em>
        <span className={styles.headings}>
          <h1>
            Rubus - ваш <b>зеленый партнер</b> в рекультивации и проектировании
          </h1>
          <p>
            Rubus - эксперт по озеленению и благоустройству земельных участков.
            Наш профессиональный подход, индивидуальное решение и качественное
            исполнение работ сделают ваш участок уютным и экологически чистым.
          </p>
        </span>
      </span>
      <span className={styles.actions}>
        <Link href={"/contacts"} className={styles.contacts}>
          Контакты
          <img src="/ui/icons/link.svg" alt="" />
        </Link>
        <Link href={"/about"} className={styles.about}>
          О предприятии
          <img src="/ui/icons/link.svg" alt="" />
        </Link>
        <span className={styles.icons}>
          <img src="/ui/icons/spade.png" alt="" />
          <img src="/ui/icons/planting.png" alt="" />
          <img src="/ui/icons/sprouts.png" alt="" />
        </span>
      </span>
    </div>
  );
};

export default HeroHeading;

import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./Offerfiller.module.scss";

const Offerfiller: NextPage = () => {
  return (
    <div className={styles.card}>
      <div style={{ position: "relative", height: 180, width: 270 }}>
        <div className={styles.cover} />
      </div>

      <span className={styles.data}>
        <span className={styles.info}>
          <em></em>
          <span className={styles.title}>
            <h3></h3>
          </span>
          <p></p>
        </span>
        <span className={styles.more}></span>
      </span>
    </div>
  );
};

export default Offerfiller;

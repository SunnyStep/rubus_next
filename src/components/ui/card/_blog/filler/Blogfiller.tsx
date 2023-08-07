import { NextPage } from "next";
import styles from "./Blogfiller.module.scss";

type cardProps = {
  size: "s" | "m" | "l";
};

const Blogfiller: NextPage<cardProps> = (props) => {
  const imageWidth = { s: 270, m: 325, l: 408 }[props.size];
  const emSize = { s: "12px", m: "12px", l: "14px" }[props.size];
  const titleSize = { s: "19px", m: "20px", l: "24px" }[props.size];
  const tagSize = { s: "19px", m: "23px", l: "23px" }[props.size];
  const selfShrink = {
    s: "flex-shrink",
    m: "align-self",
    l: "align-self",
  }[props.size];

  return (
    <div
      className={styles.card}
      style={{
        flexDirection: props.size === "s" ? "row" : "column",
        width: props.size !== "s" ? imageWidth : "100%",
      }}
    >
      <div
        className={styles.img}
        style={{
          flexShrink: selfShrink === "flex-shrink" ? 0 : "",
          alignSelf: selfShrink === "flex-shrink" ? "" : "stretch",
          width: imageWidth,
          height: props.size === "s" ? "180px" : "200px",
        }}
      />
      <div className={styles.data}>
        <span
          className={styles.info}
          style={{ width: props.size === "s" ? "298px" : "100%" }}
        >
          <em style={{ height: emSize }}></em>
          <span className={styles.text}>
            <span className={styles.title}>
              <h3 style={{ height: titleSize }}></h3>
            </span>
            <p style={{ height: props.size === "s" ? "32px" : "64px" }}></p>
          </span>
        </span>

        <span className={styles.tags}>
          <span className={styles.tag} style={{ height: tagSize }} />
          <span className={styles.tag} style={{ height: tagSize }} />
          <span className={styles.tag} style={{ height: tagSize }} />
        </span>
      </div>
    </div>
  );
};

export default Blogfiller;

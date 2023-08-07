import { FC, PropsWithChildren } from "react";
import styles from "./Container.module.scss";

const Container: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <section className={`${styles.container} ${styles._1024}`}>
      {children}
    </section>
  );
};

export default Container;

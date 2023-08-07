import { FC, PropsWithChildren } from "react";
import styles from "./Container.module.scss";

const Container: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <section className={`${styles.container} ${styles._800}`}>
      {children}
    </section>
  );
};

export default Container;

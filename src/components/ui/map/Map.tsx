import { NextPage } from "next";
import styles from "./Map.module.scss";

const Map: NextPage = () => {
  return (
    <section className={styles.map}>
      <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3AFgH9jY8mVNbAVgh_PnsJrWOjQ5tB-AXm&amp;source=constructor"></iframe>
    </section>
  );
};

export default Map;

import { FC, PropsWithChildren } from "react";
import styles from "./Layout.module.scss";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Decorations from "../decorations/Decorations";
import { useEffect, useState } from "react";

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Функция для определения, является ли устройство мобильным или настольным
    const handleDeviceType = () => {
      const width = window.innerWidth;
      const isDesktop = width > 1280;
      setIsDesktop(isDesktop);
    };

    // Вызываем функцию при монтировании компонента для получения начального значения
    handleDeviceType();
  }, []);

  return (
    <>
      <section className={styles.layout}>
        <Header />
        {isDesktop && <Decorations />}
        <main className={styles.main}>{children}</main>
        <Footer />
      </section>
    </>
  );
};

export default Layout;

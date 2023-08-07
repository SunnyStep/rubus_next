import { NextPage } from "next";
import styles from "./Feedback.module.scss";
import { useEffect, useState } from "react";

type FeedbackProps = {
  type?: "contacts";
};

const Feedback: NextPage<FeedbackProps> = (props) => {
  const useWidth = () => {
    const [width, setWidth] = useState(0);
    const handleResize = () => setWidth(window.innerWidth);
    useEffect(() => {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return width;
  };

  const width = useWidth();

  return (
    <span
      className={styles.feedback}
      style={
        props.type === "contacts"
          ? {
              gridColumn: "span 2",
              padding: width < 1024 ? 24 : 0,
              height: "100%",
              borderRadius: 0,
              border: "none",
            }
          : undefined
      }
    >
      <span className={styles.text}>
        <h3>
          {props.type ? "Или свяжитесь" : "Cвяжитесь"} с нами напрямую через
          WhatsApp
        </h3>
        <p>Отвечаем в рабочее время (понедельник - пятница) 09:00-20:00 </p>
      </span>
      <a href={"//wa.me/+79115852552"} className={styles.whatsappbtn}>
        <img src="/ui/icons/whatsapp.svg" />
        Написать нам
      </a>
    </span>
  );
};

export default Feedback;

import { NextPage } from "next";
import styles from "./Contactcard.module.scss";

type ContactcardProps = {
  title: string;
  description: string;
  data: string;
  href?: string;
  type: "phone" | "email" | "location" | "employee";
};

const Contactcard: NextPage<ContactcardProps> = (props) => {
  const { title, description, data, href, type } = props;

  return (
    <div className={styles.card}>
      <span className={styles.icon}>
        <img src={`/ui/icons/${type}.svg`} />
      </span>
      <span className={styles.text}>
        <h3>{title}</h3>
        <p>{description}</p>
        {href ? (
          <a className={styles.data} href={href} target="_blank">
            {data}
          </a>
        ) : (
          <span className={styles.data}>{data}</span>
        )}
      </span>
    </div>
  );
};

export default Contactcard;

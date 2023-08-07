import { NextPage } from "next";
import styles from "./Heading.module.scss";

type HeadingProps = {
  title: string;
  description: string;
};

const Heading: NextPage<HeadingProps> = (props) => {
  const { title, description } = props;
  return (
    <span className={styles.heading}>
      <h1>{title}</h1>
      <p>{description}</p>
    </span>
  );
};

export default Heading;

import { NextPage } from "next";
import styles from "./Heading.module.scss";
import Link from "next/link";

type HeadingProps = {
  color: string;
  pretitle: string;
  title: string;
};

const LandingHeading: NextPage<HeadingProps> = ({ color, pretitle, title }) => {
  return (
    <div className={styles.landingHeading}>
      <em style={{ color: color }}>{pretitle}</em>
      <h1>{title}</h1>
    </div>
  );
};

export default LandingHeading;

import { NextPage } from "next";
import styles from "./RouteBar.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";

type RouteBarProps = {
  domain: string;
  name: string;
  current: string;
  title: string;
};

const RouteBar: NextPage<RouteBarProps> = (props) => {
  const shortenText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

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

  const { domain, name, current, title } = props;
  return (
    <span className={styles.routebar}>
      <Link href={"//" + domain}>{name}</Link>
      <img src="/ui/icons/angle_g.svg" />
      <Link href={"//" + domain + "/" + current}>
        {width > 638 ? title : shortenText(title, width / 25)}
      </Link>
    </span>
  );
};

export default RouteBar;

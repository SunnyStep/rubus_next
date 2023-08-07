import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./Offercard.module.scss";
import { useEffect, useState } from "react";

type OffercardProps = {
  slug: string;
  cover: string;
  title: string;
  description: string;
};

const Offercard: NextPage<OffercardProps> = (props) => {
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

  const router = useRouter();

  const redirect = (slug: string) => {
    router.push("offers/" + slug);
  };

  const { slug, cover, title, description } = props;

  return (
    <div className={styles.card}>
      {width > 768 && (
        <div style={{ position: "relative", width: 270 }}>
          <Image
            onClick={() => redirect(slug)}
            className={styles.cover}
            src={"https:" + cover}
            alt={title}
            fill
            sizes="270px"
            placeholder="blur"
            blurDataURL={"/ui/placeholder.svg"}
          />
        </div>
      )}
      <span className={styles.data} onClick={() => redirect(slug)}>
        <span className={styles.info}>
          <em>Услуга</em>
          <span className={styles.title}>
            <h3>{title}</h3>
            <img src="/ui/icons/link.svg" />
          </span>
          <p>{description}</p>
        </span>
        <span className={styles.more}>
          Читать подробнее
          <img className={styles.angle} src="/ui/icons/angle_blue_950.svg" />
        </span>
      </span>
    </div>
  );
};

export default Offercard;

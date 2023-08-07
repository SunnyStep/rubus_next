import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./Entrycard.module.scss";
import { useEffect, useState } from "react";

type EntrycardProps = {
  slug: string;
  cover: string;
  title: string;
  contentType: string;
  description: string;
};

const Entrycard: NextPage<EntrycardProps> = (props) => {
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

  const getImageWidth = () => {
    const screenWidth: number = useWidth();
    return screenWidth;
  };

  const router = useRouter();

  const redirect = (domain: string, slug: string) => {
    router.push("//" + domain + "/" + slug);
  };

  const { slug, cover, title, description, contentType } = props;
  const domain =
    { offer: "offers", blog: "blog", about: "about" }[contentType] || "";

  return (
    <div className={styles.card}>
      {getImageWidth() > 768 && (
        <div style={{ position: "relative", width: "270px" }}>
          <Image
            onClick={() => redirect(domain, slug)}
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
      <span className={styles.data} onClick={() => redirect(domain, slug)}>
        <span className={styles.info}>
          <span className={styles.title}>
            <h3>{shortenText(title, 60)}</h3>
            <img src="/ui/icons/link.svg" />
          </span>
          <p>{shortenText(description, 145)}</p>
        </span>
        {getImageWidth() > 768 && (
          <span className={styles.more}>
            Перейти
            <img className={styles.angle} src="/ui/icons/angle_blue_950.svg" />
          </span>
        )}
      </span>
    </div>
  );
};

export default Entrycard;

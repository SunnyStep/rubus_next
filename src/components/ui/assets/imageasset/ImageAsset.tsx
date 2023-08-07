import { NextPage } from "next";
import styles from "./ImageAsset.module.scss";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

type ImageProps = {
  src: string;
  title?: string;
};

const ImageAsset: NextPage<ImageProps> = (props) => {
  const { src, title } = props;

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

  const imageHeight = getImageWidth() > 880 ? 440 : 200;

  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <section className={styles.asset}>
      <Image
        className={styles.image}
        src={"https:" + src}
        width={800}
        height={imageHeight}
        alt={title ? title : ""}
        onClick={() => setIsZoomed(true)}
      />
      {isZoomed && (
        <>
          <img
            className={styles.cross}
            src="/ui/icons/cross.svg"
            onClick={() => setIsZoomed(false)}
          />

          <Image
            src={"https:" + src}
            width={1920}
            height={1080}
            alt={title ? title : ""}
            className={styles.zoomedimage}
          />
          <div
            className={isZoomed ? styles.back : undefined}
            onClick={() => setIsZoomed(false)}
          />
        </>
      )}
      {title && <p>{title}</p>}
    </section>
  );
};

export default ImageAsset;

import { NextPage } from "next";
import styles from "./Blogcard.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

type cardProps = {
  size: "s" | "m" | "l";
  slug: string;
  cover: string;
  author: string;
  date: string;
  title: string;
  description: string;
  tags: string;
};

const Blogcard: NextPage<cardProps> = (props) => {
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
    router.push("blog/" + slug);
  };

  const tagParse: string[] = props.tags ? props.tags.split(", ") : [];
  const { slug, cover, author, date, title, description, tags } = props;
  const imageWidth = { s: 270, m: 325, l: 408 }[props.size];
  const emSize = { s: "12px", m: "12px", l: "14px" }[props.size];
  const titleSize = { s: "19px", m: "20px", l: "24px" }[props.size];
  const tagSize = { s: "11px", m: "14px", l: "14px" }[props.size];
  const selfShrink = {
    s: "flex-shrink",
    m: "align-self",
    l: "align-self",
  }[props.size];

  return (
    <div
      className={styles.card}
      style={{
        flexDirection: props.size === "s" ? "row" : "column",
        width:
          props.size !== "s" ? (width > 1024 ? imageWidth : "100%") : "100%",
      }}
    >
      <Image
        src={"https:" + cover}
        alt={props.title}
        width={imageWidth}
        height={200}
        sizes="270px"
        placeholder="blur"
        blurDataURL={"/ui/placeholder.svg"}
        onClick={() => redirect(slug)}
        style={
          selfShrink === "flex-shrink"
            ? { flexShrink: 0 }
            : {
                alignSelf: "stretch",
                width: width > 1024 ? imageWidth : "100%",
              }
        }
      />
      <div className={styles.data}>
        <span className={styles.info} onClick={() => redirect(slug)}>
          <em style={{ fontSize: emSize }}>
            {author} • {date.slice(0, 10)}
          </em>
          <span className={styles.text}>
            <span className={styles.title}>
              <h3 style={{ fontSize: titleSize }}>{title}</h3>
              {props.size !== "s" ? <img src="/ui/icons/link.svg" /> : null}
            </span>
            <p>{description}</p>
          </span>
        </span>

        <span className={styles.tags}>
          {tagParse.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className={styles.tag}
              style={{ fontSize: tagSize }}
            >
              {tag}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Blogcard;

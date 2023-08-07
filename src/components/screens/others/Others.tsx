import { NextPage } from "next";
import styles from "./Others.module.scss";
import Blogfiller from "@/components/ui/card/_blog/filler/Blogfiller";
import Blogcard from "@/components/ui/card/_blog/Blogcard";
import { useEffect, useState } from "react";

type Blog = {
  params: {
    slug: string;
    cover: {
      fields: {
        file: {
          url: string;
        };
      };
      sys: {
        createdAt: string;
      };
    };
    author: string;
    title: string;
    description: string;
    tags: string;
  };
};

type OthersProps = {
  blogs: Blog[];
};

const Others: NextPage<OthersProps> = ({ blogs }) => {
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
    <section className={styles.others}>
      <h2>Остальные статьи</h2>
      <section className={styles.grid}>
        {blogs.length >= 1
          ? blogs
              .slice(width > 1024 ? 3 : 0, 100)
              .map((blog) => (
                <Blogcard
                  key={blog.params.slug}
                  size="m"
                  slug={blog.params.slug}
                  cover={blog.params.cover.fields.file.url}
                  author={blog.params.author}
                  date={blog.params.cover.sys.createdAt}
                  title={blog.params.title}
                  description={blog.params.description}
                  tags={blog.params.tags}
                />
              ))
          : Array.from({ length: 6 }).map((_, index) => (
              <Blogfiller key={index} size="m" />
            ))}
      </section>
    </section>
  );
};

export default Others;

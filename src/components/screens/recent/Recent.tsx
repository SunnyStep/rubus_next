import { NextPage } from "next";
import styles from "./Recent.module.scss";
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

type RecentProps = {
  blogs: Blog[];
};

const Recent: NextPage<RecentProps> = ({ blogs }) => {
  const renderBlogcard = (blog: Blog, size: "l" | "s" | "m") => (
    <Blogcard
      size={size}
      slug={blog.params.slug}
      cover={blog.params.cover.fields.file.url}
      author={blog.params.author}
      date={blog.params.cover.sys.createdAt}
      title={blog.params.title}
      description={blog.params.description}
      tags={blog.params.tags}
    />
  );

  return (
    <section className={styles.recent}>
      <h2>Последние статьи</h2>
      <section className={styles.grid}>
        {blogs.length >= 1 ? (
          <>
            {renderBlogcard(blogs[0], "l")}
            <span className={styles.aside}>
              {blogs.length >= 2 && renderBlogcard(blogs[1], "s")}
              {blogs.length >= 3 && renderBlogcard(blogs[2], "s")}
            </span>
          </>
        ) : (
          <>
            <Blogfiller size="l" />
            <span className={styles.aside}>
              <Blogfiller size="s" />
              <Blogfiller size="s" />
            </span>
          </>
        )}
      </section>
    </section>
  );
};

export default Recent;

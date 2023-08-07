import { NextPage } from "next";
import styles from "./LandingBlogs.module.scss";
import Blogfiller from "@/components/ui/card/_blog/filler/Blogfiller";
import Blogcard from "@/components/ui/card/_blog/Blogcard";
import { useEffect, useState } from "react";
import { getBlogs } from "@/contentful/nodes";

const LandingBlogs: NextPage = () => {
  const [blogs, setBlogs] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const offers: any = await getBlogs();
      setBlogs(offers.data);
    };

    fetchData();
  }, []);

  return (
    <section className={styles.grid}>
      {blogs.length >= 1
        ? blogs
            .slice(0, 3)
            .map((blog: any) => (
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
        : Array.from({ length: 3 }).map((_, index) => (
            <Blogfiller key={index} size="m" />
          ))}
    </section>
  );
};

export default LandingBlogs;

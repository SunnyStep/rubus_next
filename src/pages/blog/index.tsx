import Layout from "@/components/layout/index/Layout";
import Head from "@/components/layout/head/Head";
import { getIndexHead, getBlogs } from "@/contentful/nodes";
import { useEffect, useState } from "react";
import { NextPage } from "next";
import Container_1024 from "@/components/layout/container/Container_1024";
import Hero from "@/components/ui/hero/Hero";
import Others from "@/components/screens/others/Others";
import Recent from "@/components/screens/recent/Recent";
import Feedback from "@/components/ui/feedback/Feedback";

const blogPage: NextPage = (props) => {
  const [headTitle, setHero] = useState<any>([]);
  const [blogs, setBlogs] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const head: any = await getIndexHead("blog");
      const blogs: any = await getBlogs();
      setHero(head.headTitle[0].params);
      setBlogs(blogs.data);
    };

    fetchData();
  }, []);

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
    <Layout>
      <Head title={headTitle.title} />
      <Container_1024>
        <Hero name="blog" />
        {width > 1024 && <Recent blogs={blogs} />}
        <Others blogs={blogs} />
        <Feedback />
      </Container_1024>
    </Layout>
  );
};

export default blogPage;

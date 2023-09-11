import Layout from "@/components/layout/index/Layout";
import Head from "@/components/layout/head/Head";
import { getBlog, getBlogs, getPaths } from "@/contentful/nodes";
import { NextPage } from "next";
import Container_800 from "@/components/layout/container/Container_800";
import Feedback from "@/components/ui/feedback/Feedback";
import { GetStaticPaths, GetStaticProps } from "next";
import AsideBar from "@/components/ui/asidebar/AsideBar";
import Article from "@/components/screens/article/Article";
import RouteBar from "@/components/ui/routebar/RouteBar";

type DataProps = {
  params: {
    slug: string;
    title: string;
    description: string;
    content: any;
  };
};

type BlogsProps = {
  params: {
    slug: string;
    title: string;
  };
};

type BlogProps = {
  blog: {
    data: DataProps[];
  };
  blogs: {
    data: BlogsProps[];
  };
  slug: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const rawpaths = await getPaths("blog");
  const paths = rawpaths.data.map((path: any) => ({
    params: { slug: path.params.slug as string },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const blog = await getBlog(slug);
  const blogs = await getBlogs();

  return {
    props: { blog, blogs, slug },
    revalidate: 60,
  };
};

const blogPage: NextPage<BlogProps> = (props) => {
  const { blog, blogs } = props;
  const { data } = blog;
  const { data: blogsData } = blogs;
  const { slug, title, description, content } = data[0]?.params || {};

  return (
    <Layout>
      <Head title={title} />
      <Container_800>
        <AsideBar routes={blogsData} current={slug} subdomain={"blog"} />
        <RouteBar domain={"blog"} name={"Блог"} current={slug} title={title} />
        <Article content={content} title={title} description={description} />
        <Feedback />
      </Container_800>
    </Layout>
  );
};

export default blogPage;

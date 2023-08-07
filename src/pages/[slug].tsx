import Layout from "@/components/layout/index/Layout";
import Head from "@/components/layout/head/Head";
import { getPage, getPaths } from "@/contentful/nodes";
import { NextPage } from "next";
import Container_800 from "@/components/layout/container/Container_800";
import Feedback from "@/components/ui/feedback/Feedback";
import { GetStaticPaths, GetStaticProps } from "next";
// import AsideBar from "@/components/ui/asidebar/AsideBar";
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

type BlogProps = {
  blog: {
    data: DataProps[];
  };
  slug: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const rawpaths = await getPaths("page");
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
  const blog = await getPage(slug);

  return {
    props: { blog, slug },
    revalidate: 300,
  };
};

const page: NextPage<BlogProps> = (props) => {
  const { blog } = props;
  const { data } = blog;
  const { slug, title, description, content } = data[0]?.params || {};

  return (
    <Layout>
      <Head title={title} />
      <Container_800>
        <RouteBar domain={"/"} name={"Рубус"} current={slug} title={title} />
        <Article content={content} title={title} description={description} />
        <Feedback />
      </Container_800>
    </Layout>
  );
};

export default page;

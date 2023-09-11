import Layout from "@/components/layout/index/Layout";
import Head from "@/components/layout/head/Head";
import { getAboutPages, getAbout, getPaths } from "@/contentful/nodes";
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

type AboutPagesProps = {
  params: {
    slug: string;
    title: string;
  };
};

type AboutProps = {
  about: {
    data: DataProps[];
  };
  aboutPages: {
    data: AboutPagesProps[];
  };
  slug: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const rawpaths = await getPaths("about");
  const paths = rawpaths.data.map((path: any) => ({
    params: { slug: path.params.slug as string },
  }));
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const about = await getAbout(slug);
  const aboutPages = await getAboutPages();

  return {
    props: { about, aboutPages, slug },
    revalidate: 60,
  };
};

const aboutPage: NextPage<AboutProps> = (props) => {
  const { about, aboutPages } = props;
  const { data } = about;
  const { data: aboutPagesData } = aboutPages;
  const { slug, title, description, content } = data[0]?.params || {};

  return (
    <Layout>
      <Head title={title} />
      <Container_800>
        <AsideBar routes={aboutPagesData} current={slug} subdomain={"about"} />
        <RouteBar
          domain={"about"}
          name={"О предприятии"}
          current={slug}
          title={title}
        />
        <Article content={content} title={title} description={description} />
        <Feedback />
      </Container_800>
    </Layout>
  );
};

export default aboutPage;

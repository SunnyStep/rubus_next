import Layout from "@/components/layout/index/Layout";
import Head from "@/components/layout/head/Head";
import { getPaths, getOffers, getOffer } from "@/contentful/nodes";
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

type OffersProps = {
  params: {
    slug: string;
    title: string;
  };
};

type OfferProps = {
  offer: {
    data: DataProps[];
  };
  offers: {
    data: OffersProps[];
  };
  slug: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const rawpaths = await getPaths("offer");
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
  const offer = await getOffer(slug);
  const offers = await getOffers();

  return {
    props: { offer, offers, slug },
    revalidate: 300,
  };
};

const aboutPage: NextPage<OfferProps> = (props) => {
  const { offer, offers } = props;
  const { data } = offer;
  const { data: offersData } = offers;
  const { slug, title, description, content } = data[0]?.params || {};

  return (
    <Layout>
      <Head title={title} />
      <Container_800>
        <AsideBar routes={offersData} current={slug} subdomain={"offers"} />
        <RouteBar
          domain={"offers"}
          name={"Услуги"}
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

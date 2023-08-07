import Layout from "@/components/layout/index/Layout";
import Head from "@/components/layout/head/Head";
import Container_1024 from "@/components/layout/container/Container_1024";
import HeroHeading from "@/components/ui/main/heading/HeroHeading";
import LandingHeading from "@/components/ui/main/heading/LandingHeading";
import LandingAbout from "@/components/ui/main/about/LandingAbout";
import LandingOffers from "@/components/ui/main/offers/LandingOffers";
import LandingBlogs from "@/components/ui/main/blogs/LandingBlogs";

export default function HomePage() {
  return (
    <Layout>
      <Head title={"Главная"} />
      <Container_1024>
        <HeroHeading />
        <LandingHeading
          color={"#5925DC"}
          pretitle="Морошка любит ножки"
          title="Уникальный коммерческий проект на Крайнем Севере России с выраженной
        социальной и экологической направленностью"
        />
        <LandingAbout />
        <LandingHeading
          color={"#175CD3"}
          pretitle={"Услуги предприятия"}
          title={
            "Наша команда профессионалов с огромным опытом в области рекультивации и озеленения выполнит любые работы"
          }
        />
        <LandingOffers />
        <LandingHeading
          color={"#095C37"}
          pretitle={"Блог предприятия"}
          title={
            "Наша жизнь - блог с полезными статьями и новостями из работы предприятия"
          }
        />
        <LandingBlogs />
      </Container_1024>
    </Layout>
  );
}

import Layout from "@/components/layout/index/Layout";
import Head from "@/components/layout/head/Head";
import { getIndexHead, getOfferTypes } from "@/contentful/nodes";
import { useEffect, useState } from "react";
import { NextPage } from "next";
import Container_1024 from "@/components/layout/container/Container_1024";
import Hero from "@/components/ui/hero/Hero";
import Feedback from "@/components/ui/feedback/Feedback";
import Contactcard from "@/components/ui/card/_contact/Contactcard";
import Contacts from "@/components/screens/contacts/Contacts";
import MapHero from "@/components/ui/hero/maphero/MapHero";
import Map from "@/components/ui/map/Map";

const contactsPage: NextPage = (props) => {
  const [headTitle, setHero] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const head: any = await getIndexHead("contacts");
      setHero(head.headTitle[0].params);
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
        <Hero name="contacts" emcolor={"#5925DC"} />
        <Contacts />
        {width > 1024 && <MapHero />}
        <Map />
      </Container_1024>
    </Layout>
  );
};

export default contactsPage;

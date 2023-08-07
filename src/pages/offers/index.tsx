import Layout from "@/components/layout/index/Layout";
import Head from "@/components/layout/head/Head";
import { getIndexHead, getOfferTypes } from "@/contentful/nodes";
import { useEffect, useState } from "react";
import { NextPage } from "next";
import Container_1024 from "@/components/layout/container/Container_1024";
import Hero from "@/components/ui/hero/Hero";
import Offers from "@/components/screens/offers/Offers";
import Feedback from "@/components/ui/feedback/Feedback";

const offerPage: NextPage = (props) => {
  const [headTitle, setHero] = useState<any>([]);
  const [offerTypes, setOfferTypes] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const head: any = await getIndexHead("offers");
      const offerTypes: any = await getOfferTypes();
      setHero(head.headTitle[0].params);
      setOfferTypes(offerTypes.offerTypes);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <Head title={headTitle.title} />
      <Container_1024>
        <Hero name="offers" emcolor={"#175CD3"} />
        {offerTypes.map((offerType: any) => (
          <Offers
            name={offerType.params.name}
            title={offerType.params.title}
            description={offerType.params.description}
          />
        ))}
        <Feedback />
      </Container_1024>
    </Layout>
  );
};

export default offerPage;

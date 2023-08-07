import { NextPage } from "next";
import styles from "./LandingOffers.module.scss";
import { useEffect, useState } from "react";
import { getAllOffers, getOfferTypes } from "@/contentful/nodes";
import Offercard from "@/components/ui/card/_offer/Offercard";
import Offerfiller from "@/components/ui/card/_offer/filler/Offerfiller";

const LandingOffersPage: NextPage = () => {
  const [offers, setOffers] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const offers: any = await getAllOffers();
      setOffers(offers.data);
    };

    fetchData();
  }, []);

  return (
    <section className={styles.offers}>
      <section className={styles.grid}>
        {offers.length >= 1
          ? offers.map((offer: any) => (
              <Offercard
                key={offer.params.slug}
                slug={offer.params.slug}
                cover={offer.params.cover.fields.file.url}
                title={offer.params.title}
                description={offer.params.description}
              />
            ))
          : Array.from({ length: 3 }).map((_, index) => (
              <Offerfiller key={index} />
            ))}
      </section>
    </section>
  );
};

export default LandingOffersPage;

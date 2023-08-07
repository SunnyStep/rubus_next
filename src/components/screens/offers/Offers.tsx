import { NextPage } from "next";
import styles from "./Offers.module.scss";
import { useEffect, useState } from "react";
import { getOffers } from "@/contentful/nodes";
import Offercard from "@/components/ui/card/_offer/Offercard";
import Offerfiller from "@/components/ui/card/_offer/filler/Offerfiller";

type offersProps = {
  name: string;
  title: string;
  description: string;
};

type offer = {
  params: {
    slug: string;
    cover: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    title: string;
    description: string;
  };
};

const Offers: NextPage<offersProps> = (props) => {
  const [offers, setOffers] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const offers: any = await getOffers(props.name);
      setOffers(offers.data);
    };

    fetchData();
  }, []);

  return (
    <section className={styles.offers}>
      <div className={styles.heading}>
        <span className={styles.icon}>
          <img src="/ui/icons/compass.svg" />
        </span>
        <span className={styles.text}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </span>
      </div>

      <section className={styles.grid}>
        {offers.length >= 1
          ? offers.map((offer: offer) => (
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

export default Offers;

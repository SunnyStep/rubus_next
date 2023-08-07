import { NextPage } from "next";
import styles from "./Hero.module.scss";
import { useEffect, useState } from "react";
import { getHero } from "@/contentful/nodes";

type HeroProps = {
  name: string;
  emcolor?: string;
};

const Hero: NextPage<HeroProps> = (props) => {
  const [hero, setHero] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const heroData: any = await getHero(props.name);
      setHero(heroData.hero);
    };

    fetchData();
  }, [props.name]); // Include props.name in the dependencies array

  return (
    <div className={styles.hero}>
      {hero.length >= 1 ? (
        <>
          <em style={{ color: props.emcolor && props.emcolor }}>
            {hero[0].params.pretitle}
          </em>
          <span className={styles.headings}>
            <h1>{hero[0].params.heading}</h1>
            <p>{hero[0].params.description}</p>
          </span>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Hero;

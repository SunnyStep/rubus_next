import { NextPage } from "next";
import Link from "next/link";
import styles from "./MenuRoute.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getSubpages } from "@/contentful/nodes";

type routeProps = {
  title: string;
  name: string;
  childs?: boolean;
};

const MenuRoute: NextPage<routeProps> = (props) => {
  const [isShown, setIsShown] = useState(false);

  const showDropdown = () => {
    setIsShown((isShown) => !isShown);
  };

  const dropdown = (name: string, isShown: boolean) => {
    const [subpages, setSubpages] = useState<any>([]);

    useEffect(() => {
      const fetchData = async () => {
        const data: any = await getSubpages(name);
        setSubpages(data.subpages);
      };

      fetchData();
    }, []);

    return (
      <div
        className={`${styles.dropdown} ${isShown ? styles.show : undefined}`}
      >
        {subpages.map((subpage: any) => (
          <div className={styles.dropline} key={subpage.params.title}>
            <Link href={`/${name}/${subpage.params.slug}`}>
              {subpage.params.title}
            </Link>
          </div>
        ))}
      </div>
    );
  };

  return (
    <span className={styles.space}>
      <span className={styles.link}>
        <Link
          href={`//${props.name !== "" ? props.name : ""}`}
          className={styles.route}
        >
          {props.title}
        </Link>
        {props.childs && (
          <img
            src="/ui/icons/angle_b_down.svg"
            style={
              isShown ? { transform: "scale(-1)" } : { transform: "scale(1)" }
            }
            onClick={() => showDropdown()}
          />
        )}
      </span>
      {props.childs && dropdown(props.name, isShown)}
    </span>
  );
};

export default MenuRoute;

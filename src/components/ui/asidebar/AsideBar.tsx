import { NextPage } from "next";
import Link from "next/link";
import styles from "./AsideBar.module.scss";

type RouteProps = {
  params: {
    slug: string;
    title: string;
  };
};

type RoutebarProps = {
  routes: RouteProps[];
  current: string;
  subdomain: string;
};

const AsideBar: NextPage<RoutebarProps> = (props) => {
  const { routes } = props;

  const isActive = (slug: string) => {
    return slug === props.current ? styles.active : undefined;
  };

  return (
    <aside className={styles.aside}>
      {routes.length >= 1 ? (
        routes.map((route) => (
          <Link
            href={route.params.slug}
            key={route.params.slug}
            className={isActive(route.params.slug)}
          >
            {route.params.title}
          </Link>
        ))
      ) : (
        <></>
      )}
    </aside>
  );
};

export default AsideBar;

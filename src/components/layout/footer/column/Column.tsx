import { NextPage } from "next";
import styles from "./Column.module.scss";
import { type } from "os";
import Link from "next/link";

type ColumnProps = {
  title: string;
  domain: string;
  col: {
    links: {
      slug: string;
      title: string;
    };
  }[];
};

const Column: NextPage<ColumnProps> = (props) => {
  const { title, domain, col } = props;

  return (
    <div className={styles.column}>
      <h4>{title}</h4>
      <div className={styles.links}>
        {col.length > 0
          ? col.map((col) => (
              <Link
                href={
                  domain !== "contacts"
                    ? `/${domain}/${col.links.slug}`
                    : `${col.links.slug}`
                }
                key={col.links.slug}
              >
                {col.links.title}
              </Link>
            ))
          : null}
      </div>
    </div>
  );
};

export default Column;

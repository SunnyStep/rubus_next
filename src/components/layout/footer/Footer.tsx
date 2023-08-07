import { NextPage } from "next";
import styles from "./Footer.module.scss";
import Column from "./column/Column";
import { useEffect, useState } from "react";
import { getBlogs, getAboutPages, getOfferPages } from "@/contentful/nodes";

const Footer: NextPage = () => {
  const [props, setSections] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const blogsData = await getBlogs();
      const aboutPagesData = await getAboutPages();
      const offerPagesData = await getOfferPages();
      setSections({
        blogs: blogsData.data.map((blog: any) => ({
          links: {
            slug: blog.params.slug,
            title: blog.params.title,
          },
        })),
        aboutPages: aboutPagesData.data.map((about: any) => ({
          links: {
            slug: about.params.slug,
            title: about.params.title,
          },
        })),
        offerPages: offerPagesData.data.map((offer: any) => ({
          links: {
            slug: offer.params.slug,
            title: offer.params.title,
          },
        })),
      });
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

  const contacts = [
    {
      links: {
        slug: "mailto: info@ntp-rubus.ru",
        title: "info@ntp-rubus.ru",
      },
    },
    {
      links: {
        slug: "tel: +79115852552",
        title: "+7 (911) 585-25-52",
      },
    },
    {
      links: {
        slug: "https://yandex.com.ge/maps/-/CXaqBfd",
        title:
          'Ненецкий АО, г.Нарьян-Мар, ул.Ленина, д.6, оф.1 (ТЦ "Тиман"), вход с торца, 1 этаж',
      },
    },
  ];

  return (
    <footer className={styles.footer}>
      {width > 638 && (
        <>
          <span className={styles.hr} />
          <section className={styles.columns}>
            {props.blogs
              ? props.blogs.length > 0 && (
                  <Column
                    title="Блог"
                    domain={"blog"}
                    col={props.blogs.slice(0, 4)}
                  />
                )
              : null}
            {props.aboutPages
              ? props.aboutPages.length > 0 && (
                  <Column
                    title="О предприятии"
                    domain={"about"}
                    col={props.aboutPages}
                  />
                )
              : null}
            {props.offerPages
              ? props.offerPages.length > 0 && (
                  <Column
                    title="Услуги"
                    domain={"offers"}
                    col={props.offerPages.slice(0, 5)}
                  />
                )
              : null}
            <Column title="Контакты" domain={"contacts"} col={contacts} />
          </section>
        </>
      )}
      <span className={styles.hr} />
      <section className={styles.legal}>
        <img src="/logo.svg" />
        <p>© {new Date().getFullYear()} НТП-«Рубус». Все права защищены.</p>
      </section>
    </footer>
  );
};

export default Footer;

import { NextPage } from "next";
import Head from "next/head";

type PageHeadProps = {
  title: string;
  description?: string;
};

const PageHead: NextPage<PageHeadProps> = (props) => {
  const pageTitle =
    props.title === undefined ? "Рубус" : props.title + " | Рубус";
  const pageDescription = props.description
    ? props.description
    : "НТП-Рубус - ведущая компания, специализирующаяся на рекультивации, озеленении,лесопосадках и природоохранных работах. Мы предоставляем комплексные решения для восстановления экосистем, реабилитации земель и создания устойчивых ландшафтов. С многолетним опытом и передовыми технологиями, мы сотрудничаем с промышленными предприятиями и государственными организациями, стремясь к балансу с природой и сохранению окружающей среды.";
  const pageCanonical = "https://www.ntp-rubus/";
  const pageOgImage = "https://www.example.com/og-image.jpg";

  return (
    <Head>
      {/* Обязательные мета-теги */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />

      {/* Мета-тег для указания базового URL, если сайт на поддомене */}
      <link rel="canonical" href={pageCanonical} />

      {/* Мета-теги Open Graph для оптимизации превью в соц. сетях */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageOgImage} />
      <meta property="og:url" content={pageCanonical} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ru_RU" />

      {/* Мета-тег для оптимизации в Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageOgImage} />

      {/* Другие мета-теги */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

      {/* Фавикон сайта */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default PageHead;

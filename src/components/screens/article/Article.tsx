import { NextPage } from "next";
import styles from "./Article.module.scss";
import renderContent from "@/contentful/render";
import Heading from "@/components/ui/heading/Heading";

type ArticleProps = {
  content: Promise<any>;
  title: string;
  description: string;
};

const Article: NextPage<ArticleProps> = (props) => {
  const content = renderContent(props.content);
  const { title, description } = props;

  return (
    <>
      <Heading title={title} description={description} />
      <article className={styles.article}>{content}</article>
    </>
  );
};

export default Article;

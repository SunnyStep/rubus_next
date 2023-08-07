import { NextPage } from "next";
import styles from "./DocumentAsset.module.scss";

type DocumentAssetProps = {
  src: string;
  title?: string;
  extension?: string;
  filename: string;
};

const DocumentAsset: NextPage<DocumentAssetProps> = (props) => {
  const { src, title, extension, filename } = props;
  return (
    <span className={styles.asset}>
      <span className={styles.data}>
        <img src={`/ui/docs/${extension}.svg`} />
        <a href={"//" + src}>{title || filename}</a>
      </span>
      <img src="/ui/icons/download.svg" />
    </span>
  );
};

export default DocumentAsset;

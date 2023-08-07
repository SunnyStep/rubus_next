import { BLOCKS } from "@contentful/rich-text-types";
import Entrycard from "@/components/ui/card/_entry/Entrycard";
import ImageAsset from "@/components/ui/assets/imageasset/ImageAsset";
import DocumentAsset from "@/components/ui/assets/documentasset/DocumentAsset";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any, children: any) => {
      const path = node.data.target.fields.file.url.split(".").pop();
      switch (path) {
        case "jpg":
        case "png":
        case "jpeg":
          return (
            <ImageAsset
              src={node.data.target.fields.file.url}
              title={node.data.target.fields.title}
            />
          );
        case "pdf":
        case "docx":
        case "xlsx":
        case "pptx":
          return (
            <DocumentAsset
              extension={node.data.target.fields.file.url.split(".").pop()}
              src={node.data.target.fields.file.url}
              title={node.data.target.fields.title}
              filename={node.data.target.fields.file.fileName}
            />
          );
        default:
          return <>Unsupported type</>;
      }
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node: any, children: any) => {
      return (
        <Entrycard
          cover={node.data.target.fields.cover.fields.file.url}
          title={node.data.target.fields.title}
          description={node.data.target.fields.description}
          contentType={node.data.target.sys.contentType.sys.id}
          slug={node.data.target.fields.slug}
        />
      );
    },
  },
};

const renderContent = (content: any) => {
  return documentToReactComponents(content, renderOptions);
};

export default renderContent;

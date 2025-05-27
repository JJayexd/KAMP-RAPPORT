// components/RenderRichText.jsx
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

export const RenderRichText = ({ document }) => {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p style={{ whiteSpace: "pre-line" }}>{children}</p>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )
    }
  };

  return <>{documentToReactComponents(document, options)}</>;
};

import React from "react";
import { Link } from "react-router-dom";
import CollectionItem from "../collection-item/collection-item.component";
import {
  StyleCollectionPreview,
  StyleTitle,
  StylePreview,
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => {
  return (
    <StyleCollectionPreview>
      <Link to={`${title.toLowerCase()}`}>
        <StyleTitle>{title.toUpperCase()}</StyleTitle>
      </Link>
      <StylePreview>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </StylePreview>
    </StyleCollectionPreview>
  );
};

export default CollectionPreview;

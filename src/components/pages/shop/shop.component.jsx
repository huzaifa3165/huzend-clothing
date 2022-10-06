import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../collection-preview/collection-preview.component";

export default class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: SHOP_DATA,
    };
  }
  render() {
    return (
      <div className="shop-page">
        {this.state.collection.map(({ id, ...others }) => (
          <CollectionPreview key={id} {...others} />
        ))}
      </div>
    );
  }
}

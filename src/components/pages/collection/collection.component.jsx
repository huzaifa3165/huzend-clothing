import "./collection.styles.scss";
import { useParams } from "react-router-dom";
import CollectionItem from "../../collection-item/collection-item.component";
import { connect } from "react-redux";
import { selectShopData } from "../../../redux/collections/collections.reselect";

const Collection = ({ shopData }) => {
  let params = useParams().collection;
  const collectionData = shopData[params];
  if (collectionData) {
    const { title, items } = collectionData;
    return (
      <div className="collection-page">
        <h2 className="title">{title}</h2>
        <div className="items">
          {items.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    shopData: selectShopData(state),
  };
};

export default connect(mapStateToProps)(Collection);

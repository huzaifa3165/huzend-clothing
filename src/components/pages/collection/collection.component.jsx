import "./collection.styles.scss";
import { useParams } from "react-router-dom";
import { selectShopData } from "../../../redux/collections/collections.reselect";
import { connect } from "react-redux";
import CollectionItem from "../../collection-item/collection-item.component";

const Collection = ({ selectShopData }) => {
  let params = useParams().collection;
  const collecitonData = selectShopData[params];
  const { title, items } = collecitonData;
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
};

const mapStateToProps = (state) => {
  return {
    selectShopData: selectShopData(state),
  };
};

export default connect(mapStateToProps)(Collection);

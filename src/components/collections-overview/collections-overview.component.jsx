import "./collection-overview.styles.scss";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectShopData } from "../../redux/collections/collections.reselect";
import { connect } from "react-redux";

const CollectionOverview = ({ SHOP_DATA }) => {
  return (
    <div className="collection-overview">
      {Object.entries(SHOP_DATA).map((array) => {
        const { id, ...others } = array[1];
        return <CollectionPreview key={id} {...others} />;
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    SHOP_DATA: selectShopData(state),
  };
};

export default connect(mapStateToProps)(CollectionOverview);

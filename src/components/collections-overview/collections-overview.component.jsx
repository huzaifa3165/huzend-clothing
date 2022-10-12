import "./collection-overview.styles.scss";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { connect } from "react-redux";
import { selectShopData } from "../../redux/collections/collections.reselect";

const CollectionOverview = ({ shopData }) => {
  return (
    <div className="collection-overview">
      {Object.entries(shopData).map((array) => {
        const { id, ...others } = array[1];
        return <CollectionPreview key={id} {...others} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    shopData: selectShopData(state),
  };
};

export default connect(mapStateToProps)(CollectionOverview);

import React from "react";
import { Routes, Route } from "react-router-dom";
import { collectionAction } from "../../../redux/collections/collections.actions";
import { firestore, getCollectionsData } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CollectionOverview from "../../collections-overview/collections-overview.component";
import Collection from "../../pages/collection/collection.component";
import WithSpinner from "../../with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapShot = null;

  componentDidMount() {
    const { shopData } = this.props;
    const collectionRef = firestore.collection("collections");
    this.unsubscribeFromSnapShot = collectionRef.onSnapshot(
      async (snapShot) => {
        const collectionsData = await getCollectionsData(snapShot);
        shopData(collectionsData);
        this.setState({ loading: false });
      }
    );

    getCollectionsData().then((data) => {
      this.setState({ theData: data });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapShot();
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Routes>
          <Route
            path=""
            element={<CollectionOverviewWithSpinner isLoading={loading} />}
          />
          <Route
            path=":collection"
            element={<CollectionWithSpinner isLoading={loading} />}
          />
        </Routes>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    shopData: (data) => dispatch(collectionAction(data)),
  };
};

export default connect(null, mapDispatchToProps)(ShopPage);

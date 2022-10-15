import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { fetchCollectionAsync } from "../../../redux/collections/collections.actions";
import { connect } from "react-redux";
import CollectionOverview from "../../collections-overview/collections-overview.component";
import Collection from "../collection/collection.component";
import WithSpinner from "../../with-spinner/with-spinner.component";
import { selectIsFetching } from "../../../redux/collections/collections.reselect";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

const ShopPage = ({ isFetching, fetchCollectionAsyncCall }) => {
  useEffect(() => {
    fetchCollectionAsyncCall();
  }, [fetchCollectionAsyncCall]);

  return (
    <div className="shop-page">
      <Routes>
        <Route
          path=""
          element={<CollectionOverviewWithSpinner isLoading={isFetching} />}
        />
        <Route
          path=":collection"
          element={<CollectionWithSpinner isLoading={isFetching} />}
        />
      </Routes>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: selectIsFetching(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCollectionAsyncCall: () => dispatch(fetchCollectionAsync()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

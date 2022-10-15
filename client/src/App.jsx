import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/pages/homepage/homepage.component";
import ShopPage from "./components/pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./components/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {
  auth,
  createNewUserIfExist,
} from "./components/firebase/firebase.utils.js";

import { connect } from "react-redux";
import { useEffect } from "react";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.reselect";
import Checkout from "./components/checkout/checkout.component";

const App = ({ currentUser, setCurrentUser }) => {
  useEffect(() => {
    const unsubscribeAuthOnCalling = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = createNewUserIfExist(user);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(user);
      }
    });
    return () => {
      unsubscribeAuthOnCalling();
    };
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/shop/*" element={<ShopPage />}></Route>
        <Route
          path="/signin"
          element={
            currentUser === null ? <SignInAndSignUpPage /> : <Navigate to="/" />
          }
        ></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};
const mapStateToProps = (state) => {
  return {
    currentUser: selectCurrentUser(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

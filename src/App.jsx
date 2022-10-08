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
import { Component } from "react";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends Component {
  unsubscribeAuthOnCalling = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeAuthOnCalling = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createNewUserIfExist(user);
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
  }
  componentWillUnmount() {
    this.unsubscribeAuthOnCalling();
  }
  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/shop" element={<ShopPage />}></Route>
          <Route
            path="/signin"
            element={
              currentUser === null ? (
                <SignInAndSignUpPage />
              ) : (
                <Navigate to="/" />
              )
            }
          ></Route>
        </Routes>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};
const mapStateToProps = ({ user }) => {
  return { currentUser: user.currentUser };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

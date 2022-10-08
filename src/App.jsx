import "./App.css";
import { Routes, Route } from "react-router-dom";
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
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/shop" element={<ShopPage />}></Route>
          <Route path="/signin" element={<SignInAndSignUpPage />}></Route>
        </Routes>
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <HomePage></HomePage>
//       <Route exact={false} path="/" component={HomePage}></Route>
//     </div>
//   );
// }
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(App);

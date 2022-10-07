import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/homepage/homepage.component";
import ShopPage from "./components/pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./components/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./components/firebase/firebase.utils.js";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeAuthOnCalling = null;
  componentDidMount() {
    this.unsubscribeAuthOnCalling = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeAuthOnCalling();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
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

export default App;

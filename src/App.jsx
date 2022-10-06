import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/homepage/homepage.component";
import ShopPage from "./components/pages/shop/shop.component";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/shop" element={<ShopPage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
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

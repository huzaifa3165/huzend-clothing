import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/homepage/homepage.component";

const Hats = () => {
  return <div>This is home</div>;
};

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/home" element={<Hats />}></Route>
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

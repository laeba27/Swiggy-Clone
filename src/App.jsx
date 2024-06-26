import "./App.css";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RestrauntMenu from "./pages/RestrauntMenu";
import Cart from "./pages/Cart";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <div>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/restaurants/:id" element={<RestrauntMenu/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

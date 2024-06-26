import "./App.css";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RestrauntMenu from "./pages/RestrauntMenu";
import Cart from "./pages/Cart";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/restaurants/:id" component={RestrauntMenu} />
          <Route path="/cart" component={Cart} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

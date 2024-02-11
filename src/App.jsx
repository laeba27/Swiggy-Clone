import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RestrauntMenu from "./pages/RestrauntMenu";
import Cart from "./pages/Cart";
import Navbar from "./Component/Navbar";

function App() {
  

  return (
    <div>
    
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/restaurants/:id" element={<RestrauntMenu/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

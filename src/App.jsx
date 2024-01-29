import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RestrauntMenu from "./pages/RestrauntMenu";

function App() {
  

  return (
    <div>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/restaurants/:id" element={<RestrauntMenu/>} />
      </Routes>
    </BrowserRouter>a
    </div>
  );
}

export default App;

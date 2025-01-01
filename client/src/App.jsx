import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Shop from "./pages/Shop/Shop";
import Product from "./pages/Product/Product";

function App() {
  return (
    <>
      <Routes>
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;

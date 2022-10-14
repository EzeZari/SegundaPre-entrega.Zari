import { CartProvider } from "./context/CartContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import ProductDetail from "./components/ItemDetailContainer/ItemDetailContainer";

import "./App.scss";
import Cart from "./components/Cart";
import Navbar from "./components/Navegacion/Navbar";

const App = () => {
  /* Envolvemos la home con el provider del context */

  return (
    
    <CartProvider>
      <BrowserRouter>
      <Navbar/>
      <Cart />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Item/:productId" element={<ProductDetail />} />
          {/* <Route path=":productCategory/:productId" element={<ProductDetail />} /> */}
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;

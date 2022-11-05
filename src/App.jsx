import { CartProvider } from "./context/CartContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import ProductDetail from "./components/ItemDetailContainer/ItemDetailContainer";

import "./App.scss";
import Cart from "./components/Cart";
import Navbar from "./components/Navegacion/Navbar";
import Checkout from "./components/Checkout/Checkout";
import ItemsSeleccionados from "./components/ItemsSeleccionados/ItemsSeleccionados";
import MensajeFinal from "./components/Checkout/MensajeFinal";

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
          <Route path="Checkout" element={<Checkout />} />
          <Route path="ItemsSeleccionados" element={<ItemsSeleccionados />} />
          <Route path="MensajeFinal" element={< MensajeFinal/>} />
          {/* <Route path=":productCategory/:productId" element={<ProductDetail />} /> */}
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;

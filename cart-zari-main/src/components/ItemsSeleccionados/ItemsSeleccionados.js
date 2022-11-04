import React from "react";
import { Link } from "react-router-dom";
import "./ItemSeleccionados.css";
import CartContext from "../../context/CartContext";
import { useContext } from "react";
import { ItemCart } from "../ItemCart";

const ItemsSeleccionados = () => {
  const { clearCart, cartItems } = useContext(CartContext);

  console.log(cartItems);

  return (
    <div className="page">
      <div className="ProductosSeleccionados">
        <h1>
          {cartItems?.length > 0
            ? "LISTA DE PRODUCTOS SELECCIONADOS"
            : "NO HAY PRODUCTOS SELECCIONADOS"}
        </h1>
        <div className="items">
          {cartItems?.map((item) => (
            <ItemCart item={item} />
          ))}
        </div>
      </div>
      <div className="botones">
        <button className="btn" onClick={clearCart}>
          <Link to="/Checkout" className="FinalizarPedido">
            Finalizar Pedido{" "}
          </Link>
        </button>
        <Link className="volver" to="/">
          Volver a la tienda
        </Link>
      </div>
    </div>
  );
};

export default ItemsSeleccionados
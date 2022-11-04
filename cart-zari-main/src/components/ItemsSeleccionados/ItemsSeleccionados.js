import React from 'react'
import { Link } from 'react-router-dom'
import "./ItemSeleccionados.css"
import CartContext from '../../context/CartContext'
import { useContext } from 'react'


const ItemsSeleccionados = () => {
  
  const { clearCart  } = useContext(CartContext);

  return (
<div>
<div className='ProductosSeleccionados'>
<h1>LISTA DE PRODUCTOS SELECCIONADOS</h1>   
</div>
  <div className='botones'>
  <button className='btn' onClick={clearCart}> <Link to="/Checkout" className='FinalizarPedido'> Finalizar Pedido </Link> </button>
        <Link className='volver' to="/">Volver a la tienda</Link>
  </div>
</div>
    

   
  )
}

export default ItemsSeleccionados
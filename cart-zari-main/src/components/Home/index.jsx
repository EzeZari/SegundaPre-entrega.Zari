import React from "react";
import Cart from "../Cart/index.jsx";
import Products from "../ItemListenerContainer/ItemListenerContainer.jsx";
import Navbar from "../Navegacion/Navbar.js";
import styles from './styles.module.scss'
import { BrowserRouter as Route } from "react-router-dom"

const Home = () => {
  return (
    
    <div className={styles.home}>
      <Navbar>
        
      <Route path='/Inicio' element={<Home/>} />
      <Route path='/Botines/' element={<Products />} />

        
        <Cart/>
      </Navbar>
      <Products />
    </div>
  );
};

export default Home;

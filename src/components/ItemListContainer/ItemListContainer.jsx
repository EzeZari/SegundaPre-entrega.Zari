import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../context/CartContext";
import styles from "./styles.module.scss";
import { ProductsData } from "../../data/Data";
import { useNavigate } from "react-router";
import { useQueryParams } from "../../hooks/useQueryParams";

const Products = () => {
  /* Traemos del context la funcion para agregar un producto */
  const { AddItemToCart } = useContext(CartContext);
  const navigate = useNavigate();

  let { category } = useQueryParams();

  const [products, setProducts] = useState(ProductsData);

  useEffect(() => {
    category
      ? setProducts(() =>
          ProductsData.filter((product) => product.category === category)
        )
      : setProducts(ProductsData);
  }, [category]);

  return (
    <div>
      <h1 className={styles.title}>
        {category ? category : "Productos"}
      </h1>
      <div className={styles.productsContainer}>
        {products.map((product, i) => (
          <div className={styles.product} key={i}>
            <img
              onClick={() => navigate(`Item/${product.id}`)}
              /* onClick={() => navigate(`${product.category}/${product.id}`)} */
              src={product.img}
              alt={product.name}
            />
            <div>
              <p>
                {product.name} - ${product.price}
              </p>
            </div>
            <button onClick={() => AddItemToCart(product)}>
              Añadir al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

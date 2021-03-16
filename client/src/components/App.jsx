import React, { useState, useEffect } from "react";
import Header from "./Header";
import Product from "./Product";
import ProductForm from "./ProductForm";
// import Products from "../lib/data.js";
import axios from "axios";
//import Mongoose from 'mongoose';


const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get("/api/products")
      .then(resp => resp.data)
      .then(data => {
        setProducts(data)
      })
  }, []);

  useEffect(() => {
    axios.get("/api/cart")
      .then(resp => resp.data)
      .then(data => setCartItems(data))
  }, []);

  const addProduct = ( product ) => {
    axios.post("/api/products", product )
      .then(resp => {
        return resp.data;
      }).then(data => {
        setProducts(products.concat(data))
      });
  }

  const editProduct = (product) => {
    let id = product.id;
    axios.put(`/api/products/${id}`, product)
      .then(resp => resp.data)
      .then(newProd => {
        const newProducts = products.map(prod => {
          return (prod._id === newProd._id ? newProd : prod)
        });
        setProducts(newProducts);
      })
  }

  const addToCart = (product) => {
    axios.post("/api/cart", {productId: product._id, product: product} )
      .then(resp => resp.data)
      .then(data => {
        addCartItem(data);
      });
  }

  const addCartItem = (item) => {
    setCartItems(cartItems.concat(item));
  }

  return (
    <div id="app">
      <Header addCartItem={addCartItem} cartItems={cartItems} />
      <main>
        <div className="product-listing">
          {products.map((product) => {
            return <Product key={product._id} product={product} onEdit={editProduct} addCartItem={addCartItem} />;
          })}
        </div>
        <ProductForm onAddProduct={addProduct} />
      </main>
    </div>
  );
};

export default App;

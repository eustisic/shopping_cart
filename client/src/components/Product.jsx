import React, { useState } from "react";
import EditForm from "./EditForm";

const Product = ({ product, onEdit, addCartItem }) => {
  const [visible, setVisible] = useState(false);

  const editProduct = (event) => {
    event.preventDefault();
    setVisible(!visible);
  };

  const inStock = (quant) => {
    return quant > 0;
  };

  return (
    <>
      <div className="product-listing">
        <h2>Products</h2>
        <div className="product">
          <div className="product-details">
            <h3>{product.title}</h3>
            <p className="price">{product.price}</p>
            <p className="quantity">{product.quantity}</p>
            <div className="actions product-actions">
              <a
                href="/#"
                className={`button add-to-cart ${
                  inStock(product.quantity) ? "" : "disabled"
                }`}
                onClick={() => addCartItem(product._id)}
              >
                Add to Cart
              </a>
              <a href="/#" onClick={editProduct} className="button edit">
                Edit
              </a>
            </div>
            <a href="/#" className="delete-button">
              <span>X</span>
            </a>
          </div>
        </div>
      </div>
      {visible ? <EditForm handler={editProduct} product={product} onEdit={onEdit} /> : null}
    </>
  );
};

export default Product;

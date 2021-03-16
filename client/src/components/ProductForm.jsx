import React, { useState } from "react";

const AddProductFrom = ( {onAddProduct} ) => {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const unHideForm = (event) => {
    event.preventDefault();
    setVisible(!visible);
    resetAddProduct();
  };

  const resetAddProduct = () => {
    setPrice("");
    setTitle("");
    setQuantity("");
  }

  const addProduct = (e) => {
    // e.preventDefault();
    onAddProduct({title, price, quantity})
    unHideForm(e);
  }



  return (
    <div className={`add-form ${visible ? "visible" : ""}`}>
      <p>
        <a href="/#"
          className="button add-product-button"
          onClick={(event) => unHideForm(event)}
        >
          Add A Product
        </a>
      </p>
      <h3>Add Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input type="text" id="product-name" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input type="text" id="product-price" value={price} onChange={(e) => setPrice(e.target.value)}/>
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
        </div>

        <div className="actions form-actions">
          <a href="/#" className="button" onClick={addProduct}>
            Add
          </a>
          <a
            href="/#"
            className="button"
            onClick={(event) => unHideForm(event)}
          >
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
};

export default AddProductFrom;

import React, {useState} from "react";

const EditForm = ({ handler, product, onEdit }) => {
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);

  const editProduct = (e) => {
    e.preventDefault();
    onEdit({id: product._id, title, price, quantity})
    handler(e);
  }

  // search existing products and find id 

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input type="text" id="product-name" value={title} onChange={(event) => setTitle(event.target.value)}/>
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input type="text" id="product-price" value={price} onChange={(event) => setPrice(event.target.value)}/>
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value={quantity} onChange={(event) => setQuantity(event.target.value)}/>
        </div>

        <div className="actions form-actions">
          <a href="/#" className="button" onClick={(e) => editProduct(e)}>Update</a>
          <a href="/#" onClick={(event) => handler(event)} className="button">
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
};

export default EditForm;

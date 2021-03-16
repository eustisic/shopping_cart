import React from "react";

const Header = ({cartItems}) => {
  let total = cartItems.reduce((acc, item) => {
    return acc + (item.price * item.quantity); 
  }, 0)

  const displayItems = () => {
    return (
       <div className="cart">
          <h2>Your Cart</h2>
          <table className="cart-items">
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
            { cartItems.map((product) => {
                return (
                  <tr key={product._id}>
                    <td>{product.title}</td>
                    <td>{product.quantity}</td>
                    <td>{product.price}</td>
                  </tr>
                )
              })
            }
              <tr>
                <td colSpan="3" className="total">
                  Total: ${total}
                </td>
              </tr>
            </tbody>
          </table>
          <a href="/#" className="button checkout">Checkout</a>
        </div>
    )
  }

  const noItems = () => {
    return (
      <div className="cart">
        <h2>Your Cart</h2>
        <p>Your cart is empty</p> 
        <p>Total: $0</p>
        <a className="button checkout disabled">Checkout</a>
      </div>
    )
  }



  return (
    <header>
      <h1>The Shop!</h1>
      { cartItems.length === 0 ? noItems() : displayItems()}
    </header>
  );
};

export default Header;


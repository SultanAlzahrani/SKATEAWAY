const shoppingCartIcon = "../assets/icons/shopping-cart.png";
import { Link } from "react-router-dom";
import { cartArray } from "../Arrays/CartArray";
import { removeItemFromArray } from "../Arrays/CartArray";
import { getItemQuantity } from "../Arrays/CartArray";
import { useState } from "react";

export default function ShoppingCart({ counter, className }) {
  return (
    <Link to={`/cart`} className="product-link-3">
      <div
        className={className + " shopping-cart-container flex-row"}
        onClick={showCartItems}
      >
        <img
          src={shoppingCartIcon}
          alt="Cart Here"
          className="shopping-cart-icon"
        />
        <span className="cart-items-counter">{counter}</span>
      </div>
    </Link>
  );
}

function showCartItems() {
  // console.log(cartArray);
}

export function CartViewPage({ counter, UpdateCartCounter }) {
  const [total, setTotal] = useState(Total());
  const handleDelete = (index) => {
    removeItemFromArray(index);
    setTotal(Total());
  };
  const handleChangeQuantity = (e, index) => {
    cartArray[index].quantity = e.target.value;
    let x = Total();
    setTotal([...Total()]);
  };

  return (
    <div className="Cart-items-container">
      <section className="left-cart-page-section flex-col">
        <h2>Cart</h2>
        {total[0] == 0 ? (
          <h1 className="Empty-cart-msg">Cart Currently Empty</h1>
        ) : (
          cartArray.map((item, index) => (
            <div className="item flex-col" key={index}>
              <p className="item-name">{item.name}</p>
              <div className="item-details-container flex-row">
                <img src={item.img} alt={item.name} />
                <div className="item-details flex-col">
                  <p>Color: {item.color}</p>
                  <p>Men's Size: {item.size}</p>
                  <p>Women's Size: {item.size + 1.5}</p>
                  <p>Quantinty:</p>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    defaultValue={item.quantity}
                    onChange={(e) => handleChangeQuantity(e, index)}
                  />
                </div>
                <span>${item.price.toFixed(2)}</span>
              </div>
              <div className="item-delete-edit flex-row">
                <button
                  onClick={() => {
                    let x = counter - getItemQuantity(index);
                    UpdateCartCounter(x);
                    handleDelete(index);
                  }}
                >
                  Remove from cart
                </button>
              </div>
            </div>
          ))
        )}
        {}
      </section>

      <section className="right-cart-page-section flex-col">
        <div className="bill flex-col">
          <h3>Your Order's Summary</h3>
          <div className="info-element flex-row">
            <span>Subtotal</span>
            <span>${total[0].toFixed(2)}</span>
          </div>
          <div className="info-element flex-row">
            <span>Tax</span>
            <span>${total[1].toFixed(2)}</span>
          </div>
          <div className="info-element flex-row">
            <span>Shipping</span>
            <span>${total[2].toFixed(2)}</span>
          </div>
          <div className="info-element flex-row">
            <h3>Order Total</h3>
            <h3>${(total[2] + total[1] + total[0]).toFixed(2)}</h3>
          </div>
        </div>
        <button>Check Out</button>
      </section>
    </div>
  );
}

function Total() {
  let total = 0;
  let tax = 0;
  let shipping = 0;
  for (let i = 0; i < cartArray.length; i++) {
    if (cartArray[i]) {
      console.log(cartArray[i].price);
      total += cartArray[i].price;
      shipping++;
    }
  }
  tax = total * 0.15;
  return [total, tax, shipping * 2];
}

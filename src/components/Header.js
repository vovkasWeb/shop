/** @format */

import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

const showOrders = (props) => {
  return (
    <div>
      {props.orders.map((el) => (
        <Order
          key={el.id}
          item={el}
        />
      ))}
    </div>
  );
};
const showNothing=()=>{
	return(
		<div className="empty">
			<h2>Toваров нету</h2>
		</div>
	)
}
export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);
  return (
    <header className="header">
      <div>
        <span className="logo">House Staff</span>
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart
          onClick={() => setCartOpen(!cartOpen)}
          className={`shop-card-button ${cartOpen && "active"}`}
        />
        {cartOpen && (
          <div className="shop-cart">
            {props.orders.lenght != 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}

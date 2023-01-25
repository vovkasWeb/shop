/** @format */

import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: "стул",
          img: "https://mills.com.ua/upload/iblock/55a/3a1gikfqd4c6ct52kj3mv16vbhqwuz85/halmar_m000029147_foto_1.jpg",
          desc: "Lorem issdfderfr",
          category: "chaurs",
          price: " 49.99",
        },
        {
          id: 2,
          title: "стул",
          img: "https://mills.com.ua/upload/iblock/55a/3a1gikfqd4c6ct52kj3mv16vbhqwuz85/halmar_m000029147_foto_1.jpg",
          desc: "Lorem issdfderfr",
          category: "chaurs",
          price: " 49.99",
        },
        {
          id: 3,
          title: "стул",
          img: "https://mills.com.ua/upload/iblock/55a/3a1gikfqd4c6ct52kj3mv16vbhqwuz85/halmar_m000029147_foto_1.jpg",
          desc: "Lorem issdfderfr",
          category: "chaurs",
          price: " 49.99",
        },
      ],
    };
    this.addToOrder = this.addToOrder.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} />
        <Items
          items={this.state.items}
          onAdd={this.addToOrder}
        />
        <Footer />
      </div>
    );
  }
  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;

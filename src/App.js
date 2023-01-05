import React from "react";
import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
// import MainRoutes from "./MainRoutes";
import Items from "./components/Items";
import Header from "./components/Header";
import Categories from "./components/Categories";
// import Pagination from "./components/Pagination";
import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "macbook",
          img: "3b9a2b0ec3ad9c544778c16d6947adea.avif",
          desc: "Хороший macbook",
          category: "Nout",
          price: "200.4",
        },
        {
          id: 2,
          title: "iphone",
          img: "None_59a7092b-f2c4-40b9-9000-7987ecc6cd26.jpg",
          desc: "Хороший Iphone",
          category: "Phone",
          price: "199.99",
        },
        {
          id: 3,
          title: "airpods-pro",
          img: "airpods-pro-2022.webp",
          desc: "Хорошиe наушники",
          category: "Airpods",
          price: "50.99",
        },
        {
          id: 4,
          title: "hoco handsfree",
          img: "Hoco.jpg",
          desc: "Хорошиe наушники",
          category: "Airpods",
          price: "70.99",
        },
        {
          id: 5,
          title: "Ebook",
          img: "ebooks.jpg",
          desc: "Хороший букридер",
          category: "Ebooks",
          price: "101.99",
        },
        {
          id: 6,
          title: "Ipad",
          img: "ipads.jpg",
          desc: "Хороший планшет",
          category: "Ipads",
          price: "130.99",
        },
      ],
    };
    this.state.currentItems = this.state.items;
    this.addToOtBar = this.addToOtBar.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items items={this.state.currentItems} onAdd={this.addToOtBar} />
        {/* <button className="btn btn-primary">Prev Page</button>
        <button className="btn btn-primary ms-2">Next Page</button>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={items.length}
          paginate={paginate} */}
        {/* /> */}
        <Footer />
      </div>
    );
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }

    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOtBar(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;

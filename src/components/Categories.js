import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "Вcё",
        },
        {
          key: "Nout",
          name: "Ноутбук",
        },
        {
          key: "Phone",
          name: "Телефон",
        },
        {
          key: "Airpods",
          name: "Наушники",
        },
        {
          key: "Ebooks",
          name: "Букридер",
        },
        {
          key: "Ipads",
          name: "Планшет",
        },
      ],
    };
  }

  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;

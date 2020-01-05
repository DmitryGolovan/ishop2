import React, { Component } from "react";
import Tr from "./Tr";
import "./styles.css";

export default class Shop extends Component {
  constructor({ data }) {
    super({ data });
    this.state = {
      list: data
    };
    this.chosen = this.chosen.bind(this);
    this.delete = this.delete.bind(this);
  }
  chosen(e) {
    let id = e.target.id;
    let list = this.state.list;
    list.forEach(item => (item.active = false));
    list[id].active = !list[id].active;

    this.setState({
      list
    });
  }

  delete(e) {
    let list = this.state.list;
    let id = e.target.id;
    let list2;
    list2 = list.filter(item => item !== list[id]);
    this.setState({
      list: list2
    });
    console.log(e.target);
  }

  render() {
    const { list } = this.state;
    return (
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>URL</th>
            <th>Quantity</th>
            <th>Control</th>
          </tr>
          {list.map((item, index) => (
            <Tr
              chosen={this.chosen}
              id={index}
              name={item.name}
              price={item.price}
              url={item.url}
              quantity={item.quantity}
              remove={this.delete}
              active={item.active}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

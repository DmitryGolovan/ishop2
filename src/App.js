import React, { Component } from "react";

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
    list[id].active = !list[id].active;
    this.setState({
      list
    });

    console.log(list[id].active);
  }

  delete(e) {
    let list = this.state.list;
    let id = e.target.id;
    let list2;
    list2 = list.filter(item => item !== list[id]);
    this.setState({
      list: list2
    });
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
            <tr
              style={{
                backgroundColor: item.active ? "blue" : "white"
              }}
            >
              <td id={index} onClick={this.chosen}>
                {item.name}
              </td>
              <td id={index} onClick={this.chosen}>
                {item.price}
              </td>
              <td id={index} onClick={this.chosen}>
                {item.url}
              </td>
              <td id={index} onClick={this.chosen}>
                {item.quantity}
              </td>
              <td>
                <input
                  type="button"
                  value="delete"
                  id={index}
                  onClick={this.delete}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

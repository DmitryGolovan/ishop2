import React, { Component } from "react";
import Item from "./Item";
import "./styles.css";

export default class Shop extends Component {
  constructor({ data }) {
    super();
    this.state = {
      list: data,
      activeItemId:null
    };
    this.chosen = this.chosen.bind(this);
    this.delete = this.delete.bind(this);
  }
  chosen(e) {
    this.setState({
      activeItemId: e.target.id
    })
    console.log(typeof this.state.activeItemId);
    console.log(typeof e.target.id)
   
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
            
            <Item
            
              chosen={this.chosen}
              key = {index}
              id={index}
              name={item.name}
              price={item.price}
              url={item.url}
              quantity={item.quantity}
              remove={this.delete}
              active={this.state.activeItemId}
              
            />
            
          ))}
        </tbody>
      </table>
    );
  }
}

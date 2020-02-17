import React, { Component } from "react";
import Item from "./Item";
import "./styles.css";
import data from "./data.json";
import Card from "./Card";
import Edit from "./Edit";
import Add from "./Add";

export default class Shop extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      activeItemId: null,
      editId: null,
      addId: false,
      nameText: "",
      priceText: "",
      urlText: "",
      quantityText: "",
      nameAdd: "",
      priceAdd: "",
      urlAdd: "",
      quantityAdd: "",
      alertText: false,
      alertPrice: false,
      alertUrl: false,
      alertQuantity: false,
      changed: false
    };
    this.chosen = this.chosen.bind(this);
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
    this.changeName = this.changeName.bind(this);
    this.editItem = this.editItem.bind(this);
    this.changePrice = this.changePrice.bind(this);
    this.changeUrl = this.changeUrl.bind(this);
    this.changeQuantity = this.changeQuantity.bind(this);
    this.addContent = this.addContent.bind(this);
    this.addItem = this.addItem.bind(this);
    this.cancelAdding = this.cancelAdding.bind(this);
  }
  componentDidMount() {
    this.setState({
      list: this.state.list.concat(data)
    });
  }

  chosen(e) {
    let addId = this.state.addId;
    if (!addId) {
      this.setState({
        activeItemId: e.target.id,
        editId: null,
        changed: false
      });
    }
    console.log(this.state.activeItemId);
    console.log(e.target.id);
  }

  delete(e) {
    let list = this.state.list;
    let id = e.target.id;
    let list2;
    list2 = list.filter(item => item.id !== parseInt(id));
    this.setState({
      list: list2,
      activeItemId: null,
      changed: false
    });
    console.log(typeof e.target.id);
  }
  edit(e) {
    this.setState({
      activeItemId: null,
      editId: e.target.id,
      addId: false,
      changed: false
    });
    console.log(this.state.editId);
  }

  changeName(e) {
    this.setState({
      nameText: e.target.value,
      changed: true
    });
    console.log(this.state.nameText);
  }
  changePrice(e) {
    let regNum = /^[0-9]+$/;
    if (e.target.value.match(regNum)) {
      this.setState({
        priceText: e.target.value,
        changed: true,
        alertPrice: false
      });
    } else {
      this.setState({
        alertPrice: true
      });
    }
  }
  changeUrl(e) {
    let regUrl = /^((http|https|ftp):\/\/)?(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)/i;
    if (e.target.value.match(regUrl)) {
      this.setState({
        urlText: e.target.value,
        changed: true,
        alertUrl: false
      });
    } else {
      this.setState({
        alertUrl: true
      });
    }
  }
  changeQuantity(e) {
    let regNum = /^[0-9]+$/;
    if (e.target.value.match(regNum)) {
      this.setState({
        quantityText: e.target.value,
        changed: true,
        alertQuantity: false
      });
    } else {
      this.setState({
        alertQuantity: true
      });
    }
  }

  editItem() {
    let list = this.state.list;
    let id = this.state.editId;
    list[id].name = this.state.nameText;
    list[id].price = this.state.priceText;
    list[id].url = this.state.urlText;
    list[id].quantity = this.state.quantityText;

    this.setState({
      list,
      editId: null
    });

    this.setState({
      changed: false
    });
  }
  addContent() {
    this.setState({
      addId: true,
      activeItemId: null,
      editId: null
    });
  }
  addItem(e) {
    let obj = {};
    obj.id = this.state.list[this.state.list.length - 1].id + 1;
    obj.name = this.state.nameText;
    obj.price = this.state.priceText;
    obj.url = this.state.urlText;
    obj.quantity = this.state.quantityText;
    this.setState({
      list: this.state.list.concat(obj),
      changed: false,
      addId: false,
      nameText: "",
      priceText: "",
      urlText: "",
      quantityText: ""
    });
  }

  cancelAdding(e) {
    this.setState({
      addId: false,
      editId: null
    });
  }

  render() {
    const {
      list,
      activeItemId,
      editId,
      addId,
      alertText,
      alertPrice,
      alertUrl,
      alertQuantity,
      nameText,
      priceText,
      urlText,
      quantityText,
      changed
    } = this.state;
    const chooseRender = () => {
      if (activeItemId !== null) {
        return <Card list={list} active={activeItemId} />;
      } else if (editId !== null) {
        return (
          <Edit
            changeName={this.changeName}
            changePrice={this.changePrice}
            changeUrl={this.changeUrl}
            changeQuantity={this.changeQuantity}
            editItem={this.editItem}
            alertText={alertText}
            alertPrice={alertPrice}
            alertUrl={alertUrl}
            alertQuantity={alertQuantity}
            nameText={nameText}
            priceText={priceText}
            urlText={urlText}
            quantityText={quantityText}
            editId={editId}
            list={list}
            cancelAdding={this.cancelAdding}
          />
        );
      } else if (addId) {
        return (
          <Add
            nameText={nameText}
            priceText={priceText}
            urlText={urlText}
            quantityText={quantityText}
            changeName={this.changeName}
            changePrice={this.changePrice}
            changeUrl={this.changeUrl}
            changeQuantity={this.changeQuantity}
            addItem={this.addItem}
            cancelAdding={this.cancelAdding}
            alertext={alertText}
            alertPrice={alertPrice}
            alertUrl={alertUrl}
            alertQuantity={alertQuantity}
          />
        );
      }
    };

    return (
      <div>
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
                key={index}
                id={item.id}
                name={item.name}
                price={item.price}
                url={item.url}
                quantity={item.quantity}
                remove={this.delete}
                active={activeItemId}
                edit={this.edit}
                editId={editId}
                addId={addId}
                changed={changed}
              />
            ))}
          </tbody>
        </table>
        <div
          style={{
            paddingTop: "3%",
            textAlign: "left"
          }}
        >
          <input
            type="button"
            value="Add Item"
            disabled={editId !== null}
            onClick={this.addContent}
          />
        </div>
        {chooseRender()}
      </div>
    );
  }
}

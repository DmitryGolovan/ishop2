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
      alertQuantity: false
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
        editId: null
      });
    }
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
  edit(e) {
    this.setState({
      activeItemId: null,
      editId: e.target.id,
      addId: false
    });
    console.log(this.state.activeItemId);
  }

  changeName(e) {
    this.setState({
      nameText: e.target.value
    });
    console.log(this.state.nameText);
  }
  changePrice(e) {
    this.setState({
      priceText: e.target.value
    });
  }
  changeUrl(e) {
    this.setState({
      urlText: e.target.value
    });
  }
  changeQuantity(e) {
    this.setState({
      quantityText: e.target.value
    });
  }

  editItem() {
    let list = this.state.list;
    let id = this.state.editId;
    let regNum = /^[0-9]+$/;
    let regUrl = /^((http|https|ftp):\/\/)?(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)/i;

    if (this.state.nameText !== "") {
      list[id].name = this.state.nameText;
    }
    if (this.state.priceText.match(regNum)) {
      list[id].price = this.state.priceText;
    }
    if (this.state.urlText.match(regUrl)) {
      list[id].url = this.state.urlText;
    }
    if (this.state.quantityText.match(regNum)) {
      list[id].quantity = this.state.quantityText;
    }
    this.setState({
      list,
      editId: null
    });
    if (this.state.nameText === "") {
      this.setState({
        alertText: true
      });
    } else {
      this.setState({
        alertText: false,
        nameText: ""
      });
    }
    if (!this.state.priceText.match(regNum)) {
      this.setState({
        alertPrice: true
      });
    } else {
      this.setState({
        alertPrice: false,
        priceText: ""
      });
    }
    if (!this.state.urlText.match(regUrl)) {
      this.setState({
        alertUrl: true
      });
    } else {
      this.setState({
        alertUrl: false,
        urlText: ""
      });
    }
    if (!this.state.quantityText.match(regNum)) {
      this.setState({
        alertQuantity: true
      });
    } else {
      this.setState({
        alertQuantity: false,
        quantityText: ""
      });
    }
  }
  addContent() {
    this.setState({
      addId: true,
      activeItemId: null,
      editId: null
    });
  }
  addItem(e) {
    let regNum = /^[0-9]+$/;
    let regUrl = /^((http|https|ftp):\/\/)?(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)/i;

    let obj = {};
    if (this.state.nameText !== "") {
      obj.name = this.state.nameText;
    } else {
      this.setState({
        alertText: true
      });
    }
    if (this.state.priceText.match(regNum)) {
      obj.price = this.state.priceText;
    } else {
      this.setState({
        alertPrice: true
      });
    }
    if (this.state.urlText.match(regUrl)) {
      obj.url = this.state.urlText;
    } else {
      this.setState({
        alertUrl: true
      });
    }
    if (this.state.quantityText.match(regNum)) {
      obj.quantity = this.state.quantityText;
    } else {
      this.setState({
        alertQuantity: true
      });
    }
    if (
      this.state.nameText !== "" &&
      this.state.priceText.match(regNum) &&
      this.state.urlText.match(regUrl) &&
      this.state.quantityText.match(regNum)
    ) {
      this.setState({
        list: this.state.list.concat(obj),
        nameText: "",
        priceText: "",
        urlText: "",
        quantityText: "",
        addId: false,
        editId: null,
        alertText: false,
        alertPrice: false,
        alertUrl: false,
        alertQuantity: false
      });
    }
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
      quantityText
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
                id={index}
                name={item.name}
                price={item.price}
                url={item.url}
                quantity={item.quantity}
                remove={this.delete}
                active={this.state.activeItemId}
                edit={this.edit}
                editId={editId}
                addId={addId}
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

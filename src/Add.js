import React from "react";

export default function Add({
  nameText,
  priceText,
  urlText,
  quantityText,
  changePrice,
  changeUrl,
  changeQuantity,
  changeName,
  addItem,
  cancelAdding,
  alertText,
  alertPrice,
  alertUrl,
  alertQuantity
}) {
  return (
    <div
      style={{
        textAlign: "left",
        width: "500px"
      }}
    >
      <div style={style}>
        <div>Name</div>
        <input type="text" value={nameText} onChange={e => changeName(e)} />
        {alertText ? <div>Please, write something here</div> : null}
      </div>
      <div style={style}>
        <div>Price</div>
        <input type="text" onChange={e => changePrice(e)} />
        {alertPrice ? <div>Please, write a number here</div> : null}
      </div>
      <div style={style}>
        URL
        <input type="text" onChange={e => changeUrl(e)} />
        {alertUrl ? <div>Please, insert a correct URL here</div> : null}
      </div>
      <div style={style}>
        Quantity
        <input type="text" onChange={e => changeQuantity(e)} />
        {alertQuantity ? <div>Please, insert a number here</div> : null}
      </div>
      <div>
        <input
          type="button"
          value="Add"
          onClick={addItem}
          disabled={!nameText || !priceText || !urlText || !quantityText}
        />
        <input type="button" value="Cancel" onClick={e => cancelAdding(e)} />
      </div>
    </div>
  );
}
const style = {
  paddingTop: "6%",
  display: "grid",
  gridTemplateColumns: "10% 40% 50%",
  gridColumnGap: "5%"
};

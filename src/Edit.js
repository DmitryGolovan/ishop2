import React from "react";

export default function Edit({
  changeName,
  changePrice,
  changeUrl,
  changeQuantity,
  editItem,
  alertText,
  alertPrice,
  alertUrl,
  alertQuantity,
  nameText,
  priceText,
  urlText,
  quantityText,
  editId,
  list,
  cancelAdding
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
        <input
          type="text"
          value={nameText ? nameText : list[editId].name}
          onChange={e => changeName(e)}
        />
        {alertText ? <div>Please, write something here</div> : null}
      </div>
      <div style={style}>
        <div>Price</div>
        <input
          type="text"
          value={priceText ? priceText : list[editId].price}
          onChange={e => changePrice(e)}
        />
        {alertPrice ? <div>Please, write something here</div> : null}
      </div>
      <div style={style}>
        URL
        <input
          type="text"
          value={urlText ? urlText : list[editId].url}
          onChange={e => changeUrl(e)}
        />
        {alertUrl ? <div>Please, write something here</div> : null}
      </div>
      <div style={style}>
        Quantity
        <input
          type="text"
          value={quantityText ? quantityText : list[editId].quantity}
          onChange={e => changeQuantity(e)}
        />
        {alertQuantity ? <div>Please, write something here</div> : null}
      </div>
      <div>
        <input
          type="button"
          value="Edit"
          onClick={editItem}
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

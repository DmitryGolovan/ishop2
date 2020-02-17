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
        <input type="text" value={nameText} onChange={e => changeName(e)} />
        {alertText ? (
          <div>Please, write something here. Value must be a string</div>
        ) : null}
      </div>
      <div style={style}>
        <div>Price</div>
        <input type="text" value={priceText} onChange={e => changePrice(e)} />
        {alertPrice ? (
          <div>Please, write something here. Value must be a number</div>
        ) : null}
      </div>
      <div style={style}>
        URL
        <input type="text" value={urlText} onChange={e => changeUrl(e)} />
        {alertUrl ? <div>Paste a real URL</div> : null}
      </div>
      <div style={style}>
        Quantity
        <input
          type="text"
          value={quantityText}
          onChange={e => changeQuantity(e)}
        />
        {alertQuantity ? (
          <div>Please, write something here. Value must be a number</div>
        ) : null}
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

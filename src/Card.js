import React from "react";

export default function Card({ list, active }) {
  return (
    <div
      style={{
        textAlign: "left"
      }}
    >
      <div style={style}>Name: {list[active].name}</div>
      <div style={style}>Price: {list[active].price}</div>
    </div>
  );
}
const style = {
  paddingTop: "2%"
};

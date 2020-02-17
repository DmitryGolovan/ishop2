import React from "react";

export default function Card({ list, active }) {
  return (
    <div
      style={{
        textAlign: "left"
      }}
    >
      <div style={style}>
        Name: {list.map(item => (item.id == active ? item.name : null))}
      </div>
      <div style={style}>
        Price: {list.map(item => (item.id == active ? item.price : null))}
      </div>
    </div>
  );
}
const style = {
  paddingTop: "2%"
};

import React from "react";

export default function Tr({
  remove,
  chosen,
  name,
  price,
  url,
  quantity,
  id,
  active
}) {
  return (
    <tr
      style={{
        backgroundColor: active ? "blue" : "white"
      }}
    >
      <td id={id} onClick={e => chosen(e)}>
        {name}
      </td>
      <td id={id} onClick={e => chosen(e)}>
        {price}
      </td>
      <td id={id} onClick={e => chosen(e)}>
        {url}
      </td>
      <td id={id} onClick={e => chosen(e)}>
        {quantity}
      </td>
      <td id={id}>
        <input id={id} type="button" value="delete" onClick={e => remove(e)} />
      </td>
    </tr>
  );
}

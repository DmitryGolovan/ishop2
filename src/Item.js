import React from "react";

export default function Item({
  remove,
  chosen,
  name,
  price,
  url,
  quantity,
  id,
  active,
  edit,
  editId,
  addId,
  changed
}) {
  return (
    <tr
      style={{
        backgroundColor: id == active || id == editId ? "tomato" : "white"
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
        <input
          id={id}
          type="button"
          value="delete"
          onClick={e => remove(e)}
          disabled={addId}
        />
        <input
          id={id}
          type="button"
          value="edit"
          onClick={e => edit(e)}
          disabled={addId || changed}
        />
      </td>
    </tr>
  );
}

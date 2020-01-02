import React from "react";

export default function Tr({ data }) {
  return (
    <div>
      <tr>
        <td>{data.name}</td>
        <td>{data.price}</td>
      </tr>
    </div>
  );
}

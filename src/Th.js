import React from "react";

export default function Th({ head }) {
  return (
    <div>
      {head.map(item => (
        <th>{item}</th>
      ))}
    </div>
  );
}

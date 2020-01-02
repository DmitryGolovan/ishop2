import React from "react";
import Td from "./Td";

export default function Tds({ data }) {
  return (
    <div>
      {data.map(item => (
        <div>
          <Td data={item} />
        </div>
      ))}
    </div>
  );
}


import React from "react";
import { useParams } from "react-router-dom";

function ItemDetail() {
  const { id } = useParams();

  const items = {
    1: "Description for Item 1",
    2: "Description for Item 2",
    3: "Description for Item 3"
  };

  if (!items[id]) {
    return <h1>Item not found</h1>;
  }

  return (
    <div>
      <h1>Item {id}</h1>
      <p>{items[id]}</p>
    </div>
  );
}

export default ItemDetail;

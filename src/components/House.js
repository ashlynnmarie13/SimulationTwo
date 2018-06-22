import React from "react";

function House(props) {
  return (
    <div>
      <div>{props.children}</div>
      <button>Delete</button>
    </div>
  );
}
export default House;

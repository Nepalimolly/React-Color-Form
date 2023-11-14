import React from "react";

function ColorDetail(match) {
  const color = match.color;

  return (
    <div>
      <h1>{color} Color Detail</h1>
    </div>
  );
}

export default ColorDetail;

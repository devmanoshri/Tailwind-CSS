import { useState } from "react";

function Dropdown({ options }) {
  const renderedData = options.map((option) => {
    return <div>{option.value}</div>;
  });
  return (
    <div>
      <div>Select...</div>
      <div>{renderedData}</div>
    </div>
  );
}

export default Dropdown;

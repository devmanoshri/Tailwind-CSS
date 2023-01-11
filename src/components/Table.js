import React from "react";

function Table({ tableData, config }) {
  const tableHeader = config.map((tableHead) => {
    return <th key={tableHead.label}>{tableHead.label}</th>;
  });
  const renderedData = tableData.map((fruit) => {
    return (
      <tr key={fruit.name} className="border-b">
        <td className="p-3">{config[0].render(fruit)}</td>
        <td className="p-3">
          {/* <div className={`p-3 m-2 ${fruit.color}`}></div> */}
          {config[1].render(fruit)}
        </td>
        <td className="p-3">{config[2].render(fruit)}</td>
      </tr>
    );
  });
  return (
    <div>
      <table className="table-auto border-spacing-2">
        <thead>
          <tr className="border-b-2">{tableHeader}</tr>
        </thead>
        <tbody>{renderedData}</tbody>
      </table>
    </div>
  );
}

export default Table;

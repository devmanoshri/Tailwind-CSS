import React from "react";

function Table({ tableData, config }) {
  const tableHeader = config.map((tableHead) => {
    return <th key={tableHead.label}>{tableHead.label}</th>;
  });

  const renderedData = tableData.map((fruit) => {
    const renderedRow = config.map((rowData) => {
      return (
        <td key={rowData.render(fruit)} className="p-3">
          {rowData.render(fruit)}
        </td>
      );
    });
    return (
      <tr key={fruit.name} className="border-b">
        {renderedRow}
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

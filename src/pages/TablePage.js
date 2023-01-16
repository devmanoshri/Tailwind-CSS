//import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

function TablePage() {
  const config = [
    {
      label: "Fruits",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-2 m-2 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
  ];
  const data = [
    { name: "Banana", color: "bg-yellow-500", score: 4 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Grapes", color: "bg-green-500", score: 2 },
    { name: "Strawberry", color: "bg-red-500", score: 1 },
  ];
  const keyFn = (fruit) => {
    return fruit.name;
  };
  return (
    <div>
      <SortableTable tableData={data} config={config} keyFn_={keyFn} />
    </div>
  );
}

export default TablePage;

import { useState } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

function CounterPage({ initialValue }) {
  const [count, setCount] = useState(10);
  const [valueToAdd, setValueToAdd] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const handelChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    setValueToAdd(value);
  };
  const handelSubmit = (event) => {
    event.preventDefault();
    setCount(count + valueToAdd);
    setValueToAdd(0)
  };
  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is: {count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form onSubmit={handelSubmit}>
        <label>Add a lot!</label>
        <input
          value={valueToAdd || ""}
          onChange={handelChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
      </form>
    </Panel>
  );
}

export default CounterPage;

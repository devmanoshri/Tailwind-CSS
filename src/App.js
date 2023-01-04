import { useState } from "react";
import Dropdown from "./components/Dropdown";
function App() {
  const [selection, setSelection] = useState(null);
  const handelSelection = (option) => {
    setSelection(option);
  };
  const dropdownOptions = [
    { label: "Red", value: "Red" },
    { label: "Green", value: "Green" },
    { label: "Blue", value: "Blue" },
    { label: "Yellow", value: "Yellow" },
  ];
  return (
    <Dropdown
      options={dropdownOptions}
      value={selection}
      onChange={handelSelection}
    />
  );
}

export default App;

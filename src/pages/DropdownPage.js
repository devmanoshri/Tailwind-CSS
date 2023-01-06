import { useState } from "react";
import Dropdown from "../components/Dropdown";
function DropDownPage() {
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
    <div className="flex">
      <Dropdown
        options={dropdownOptions}
        value={selection}
        onChange={handelSelection}
      />
      <Dropdown
        options={dropdownOptions}
        value={selection}
        onChange={handelSelection}
      />
    </div>
  );
}

export default DropDownPage;

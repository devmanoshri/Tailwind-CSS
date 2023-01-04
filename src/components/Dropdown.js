import { useState } from "react";
import { GoChevronDown } from "react-icons/go";

function Dropdown({ options, value, onChange }) {
  const [showOption, setShowOption] = useState(false);

  const handelShowOption = () => {
    setShowOption(!showOption);
  };
  const handelOptionClick = (option) => {
    //console.log(option);
    setShowOption(false);
    onChange(option);
  };
  const renderedData = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        key={option.value}
        onClick={() => handelOptionClick(option)}
      >
        {option.label}
      </div>
    );
  });

  //let content = selection === null ? "Select..." : selection.value;
  return (
    <div className="w-48 relative">
      <div
        className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
        onClick={handelShowOption}
      >
        {value?.label || "Select..."}
        <GoChevronDown className="text-lg" />
      </div>
      {showOption && (
        <div className="absolute top-full border rounded p-3 shadow bg-white w-full">
          {renderedData}
        </div>
      )}
    </div>
  );
}

export default Dropdown;

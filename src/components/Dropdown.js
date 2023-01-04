import { useState } from "react";

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
      <div key={option.value} onClick={() => handelOptionClick(option)}>
        {option.label}
      </div>
    );
  });

  //let content = selection === null ? "Select..." : selection.value;
  return (
    <div>
      <div onClick={handelShowOption}>{value?.label || "Select..."}</div>
      {showOption && <div>{renderedData}</div>}
    </div>
  );
}

export default Dropdown;

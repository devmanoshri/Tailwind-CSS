import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [showOption, setShowOption] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current.contains(event.target)) {
        setShowOption(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

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
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer "
        onClick={handelShowOption}
      >
        {value?.label || "Select..."}
        <GoChevronDown className="text-lg" />
      </Panel>
      {showOption && (
        <Panel className="absolute top-full ">{renderedData}</Panel>
      )}
    </div>
  );
}

export default Dropdown;

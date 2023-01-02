import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  //console.log("expandedIndex", expandedIndex);
  const handelClick = (nextIndex) => {
    //console.log("nextIndex", nextIndex);
    if (expandedIndex === nextIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(nextIndex);
    }
  };
  const renderedItem = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );
    return (
      <div key={item.id}>
        <div
          className="flex justify-between bg-gray-50 border-b items-center cursor-pointer p-3"
          onClick={() => handelClick(index)}
        >
          {item.label} {icon}
        </div>
        {isExpanded && (
          <div className="border-b p-3 bg-white-200">{item.content}</div>
        )}
      </div>
    );
  });
  return <div>{renderedItem}</div>;
}

export default Accordion;

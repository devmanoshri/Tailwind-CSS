import Dropdown from "./components/Dropdown";
function App() {
  const dropdownOptions = [
    { label: "Red", value: "Red" },
    { label: "Green", value: "Green" },
    { label: "Blue", value: "Blue" },
    { label: "Yellow", value: "Yellow" },
  ];
  return <Dropdown options={dropdownOptions} />;
}

export default App;

import SideBar from "./components/SideBar";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";
import TablePage from "./pages/TablePage";
import ModalPage from "./pages/ModalPage";

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <SideBar />
      <div className="col-span-5">
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/">
          <DropdownPage />
        </Route>
        <Route path="/button">
          <ButtonPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
      </div>
    </div>
  );
}

export default App;

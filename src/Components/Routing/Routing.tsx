import { Routes, Route } from "react-router-dom";
import "./Routing.css";
import NewMain from "../NewMain/NewMain";
import Menu from "../Manu/Menu";

function Routing(): JSX.Element {
  return (
    <div className="Routing">
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/NewMain" element={<NewMain />} />
        <Route path="*" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default Routing;

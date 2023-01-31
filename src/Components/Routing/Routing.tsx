import { Routes, Route } from "react-router-dom";
import "./Routing.css";
import NewMain from "../NewMain/NewMain";
import Manu from "../Manu/Manu";

function Routing(): JSX.Element {
  return (
    <div className="Routing">
      <Routes>
        <Route path="/" element={<Manu />} />
        <Route path="/NewMain" element={<NewMain />} />

        <Route path="*" element={<Manu />} />
      </Routes>
    </div>
  );
}

export default Routing;

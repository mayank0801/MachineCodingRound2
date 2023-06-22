import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import { NavLink } from "react-router-dom";
import HabitModal from "./Component/HabitModal";
import ArchivePage from "./Page/Archieve";

export default function App() {
  return (
    <div className="App">
      <div className="conatiner-center">
        <h1 style={{ textAlign: "center", color: "blue" }}>Habit tracker</h1>
        <nav style={{ padding: "1rem", display: "flex" }}>
          <NavLink className="nav-item" to="/">
            Home
          </NavLink>
          <NavLink className="nav-item" to="/archive">
            Archieve
          </NavLink>
        </nav>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/archive" element={<ArchivePage />} />
        </Routes>
      </div>
    </div>
  );
}

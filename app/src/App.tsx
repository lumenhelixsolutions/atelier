import { NavLink, Route, Routes } from "react-router-dom";
import FormationPage from "./pages/FormationPage";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div className="shell">
      <header className="shell-header">
        <div className="brand">
          <span className="brand-mark">A</span>
          <div>
            <strong>Atelier</strong>
            <span className="brand-sub">agent formation</span>
          </div>
        </div>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/formation">Formation</NavLink>
        </nav>
      </header>
      <main className="shell-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/formation/*" element={<FormationPage />} />
        </Routes>
      </main>
    </div>
  );
}
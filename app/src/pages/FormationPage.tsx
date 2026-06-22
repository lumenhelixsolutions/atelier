import { Route, Routes } from "react-router-dom";
import FormationDiscover from "./formation/Discover";
import FormationEnrollments from "./formation/Enrollments";

export default function FormationPage() {
  return (
    <div className="formation-layout">
      <aside className="formation-nav">
        <h2>Formation</h2>
        <a href="/formation">Discover</a>
        <a href="/formation/enrollments">Enrollments</a>
      </aside>
      <div className="formation-content">
        <Routes>
          <Route index element={<FormationDiscover />} />
          <Route path="enrollments" element={<FormationEnrollments />} />
        </Routes>
      </div>
    </div>
  );
}
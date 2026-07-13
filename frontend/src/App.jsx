import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Timetable from "./pages/Timetable";
import Notes from "./pages/Notes";
import Assignments from "./pages/Assignments";
import Attendance from "./pages/Attendance";
import AIAssistant from "./pages/AIAssistant";
import Settings from "./pages/Settings";
import PDFStudy from "./pages/PDFStudy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/timetable" element={<Timetable />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/assignments" element={<Assignments />} />
      <Route path="/attendance" element={<Attendance />} />
      <Route path="/ai" element={<AIAssistant />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/pdf-study" element={<PDFStudy />} />
    </Routes>
  );
}

export default App;
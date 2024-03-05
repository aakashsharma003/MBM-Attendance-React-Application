import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { StudentDashboard } from "./pages/StudentDashboard";
import { TeacherDashboard } from "./pages/TeacherDashboard";
import { Attendence } from "./pages/Attendence";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
          <Route
            path="/MBM-Attendance-React-Application/teacher/mark-Attendence"
            element={<Attendence />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

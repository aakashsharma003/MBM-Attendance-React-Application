import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { StudentDashboard } from "./pages/StudentDashboard";
import { TeacherDashboard } from "./pages/TeacherDashboard";
import { Attendence } from "./pages/Attendence";
import { useState } from "react";
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
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

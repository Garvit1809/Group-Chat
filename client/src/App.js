import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Teachers from "./Pages/Teachers";
import Teacher from "./Pages/Teacher";
import Profile from "./Pages/Profile";
import Resources from "./Pages/Resources";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/teachers/:id" element={<Teacher />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/resources" element={<Resources/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

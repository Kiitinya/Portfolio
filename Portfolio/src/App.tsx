import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Home from "./pages/Home";


function App() {
  return (
    <>
      <NavBar />
      <div style={{ marginLeft: "80px", padding: "1rem" }}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

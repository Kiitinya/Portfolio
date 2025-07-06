import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Home from "./pages/Home";


function App() {
  return (
    <>
      <NavBar />
      <div style={{ marginLeft: "80px", padding: "1rem" }}>
        <Routes>
          <Route path="/search" element={<Home />} />
 
          {/* Agrega más rutas según las vayas necesitando */}
        </Routes>
      </div>
    </>
  );
}

export default App;

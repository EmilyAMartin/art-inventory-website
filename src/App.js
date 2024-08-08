import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Art from "./Components/Art";
import Account from "./Components/Account";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Art" element={<Art />} />
          <Route path="/Account" element={<Account />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

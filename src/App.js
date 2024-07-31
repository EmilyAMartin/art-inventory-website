import "./App.css";
import Home from "./Components/Home";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import Artwork from "./Components/Artwork";

function App() {
  return (
    <div className="App">
      <Home />
      <Registration />
      <Login />
      <Artwork />
    </div>
  );
}

export default App;

import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Art from "./Components/Art";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/Art":
      component = <Art />;
      break;
  }
  return (
    <>
      <NavBar />
      {component}
    </>
  );
}

export default App;

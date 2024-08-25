import AllRoutes from "./AllRoutes";
import "./App.css";
import NavBar from "./components/navbar/NavBar";

import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <NavBar />

        <AllRoutes />
      </Router>
    </>
  );
}

export default App;

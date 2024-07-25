import { NavBar } from "./components/NavBar";
import { AppRoutes } from "./routes/routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;

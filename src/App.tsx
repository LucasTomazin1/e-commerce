import { NavBar } from "./components/NavBar";
import { CartProvider } from "./contexts/CartContext";
import { AppRoutes } from "./routes/routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <NavBar />
          <AppRoutes />
        </Router>
      </CartProvider>
    </>
  );
}

export default App;

import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { CartProvider } from "./contexts/CartContext";
import { SearchProvider } from "./contexts/SearchContext";
import { AppRoutes } from "./routes/routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <CartProvider>
        <SearchProvider>
          <Router basename="/e-commerce">
            <NavBar />
            <AppRoutes />
            <Footer />
          </Router>
        </SearchProvider>
      </CartProvider>
    </>
  );
}

export default App;

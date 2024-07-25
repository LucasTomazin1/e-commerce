import { Route, Routes } from "react-router-dom";
import { ProductList } from "../components/ProductList";
import { Product } from "../components/Product";
import { Cart } from "../components/Cart";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/details/:id" element={<Product />} />
      <Route path="/cart/" element={<Cart />} />
    </Routes>
  );
};

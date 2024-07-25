import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { fetchProducts } from "../service/api";
import styled from "styled-components";

interface Product {
  thumbnail: string;
  title: string;
  price: number;
  id: string;
  permalink: string;
}

export const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts("celular").then((response) => {
      setProducts(response);
    });
  }, []);

  console.log(products);
  return (
    <Container>
      <List>
        {products.map((product, index) => (
          <li key={index}>
            <ProductCard
              id={product.id}
              image={product.thumbnail}
              title={product.title}
              price={product.price}
              permalink={product.permalink}
            />
          </li>
        ))}
      </List>
    </Container>
  );
};

const Container = styled.section`
  padding: 5rem 10rem;
`;
const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

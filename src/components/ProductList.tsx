import { useEffect, useState, useContext } from "react";
import { ProductCard } from "./ProductCard";
import { getProducts } from "../service/api";
import styled from "styled-components";
import { SearchContext } from "../contexts/SearchContext";
interface Product {
  thumbnail: string;
  title: string;
  price: number;
  id: string;
  permalink: string;
}

export const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { query } = useContext(SearchContext);

  useEffect(() => {
    getProducts(query).then((response) => {
      setProducts(response);
    });
  }, [query]);

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

  @media(max-width: 768px){
    padding: 3rem;
  }
  @media(max-width: 480px){
    padding: 1rem;
  }
`;
const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

import styled from "styled-components";
import { Button } from "./Button";
import { useCart } from "../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface Product {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  permalink: string;
}

interface CartItemProps {
  product: Product;
}

export const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const { dispatch } = useCart();

  const handleRemoveFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", product });
  };

  return (
    <Container>
      <img src={product.thumbnail} alt={product.title} />
      <ItemDetails>
        <h3>{product.title}</h3>
        <p>R$ {product.price.toFixed(2)}</p>
      </ItemDetails>
      <Button onClick={handleRemoveFromCart}>
        <FontAwesomeIcon icon={faTrash} />
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 2rem;
  gap: 2rem;
  background-color: #333333;
  justify-content: space-between;
  border-radius: 1rem;

  img {
    border-radius: 0.5rem;
  }
`;

const ItemDetails = styled.div`
  width: 100%;
  font-weight: 700;

  h3 {
    font-size: 1.4rem;
  }
  p {
    font-size: 1.5rem;
    margin-top: 1rem;
  }
`;

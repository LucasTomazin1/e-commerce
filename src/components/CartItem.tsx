import styled from "styled-components";
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
  quantity: number;
}

export const CartItem: React.FC<CartItemProps> = ({ product, quantity }) => {
  const { dispatch } = useCart();

  const handleRemoveFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", product });
  };

  const handleIncreaseQuantity = () => {
    dispatch({ type: "UPDATE_QUANTITY", product, quantity: quantity + 1 });
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      dispatch({ type: "UPDATE_QUANTITY", product, quantity: quantity - 1 });
    } else {
      handleRemoveFromCart();
    }
  };

  return (
    <Container>
      <img src={product.thumbnail} alt={product.title} />
      <ItemDetails>
        <h3>{product.title}</h3>
        <FlexDetails>
          <p>R$ {product.price.toFixed(2)}</p>
          <QuantityContainer>
            <SmallButton onClick={handleDecreaseQuantity}>-</SmallButton>
            <p>{quantity}</p>
            <SmallButton onClick={handleIncreaseQuantity}>+</SmallButton>
          </QuantityContainer>
          <SmallButton onClick={handleRemoveFromCart}>
            <FontAwesomeIcon icon={faTrash} />
          </SmallButton>
        </FlexDetails>
      </ItemDetails>
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
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    font-size: 1.4rem;
  }
`;

const FlexDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: auto;

  p {
    font-size: 1.5rem;
    margin-top: 1rem;
  }
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 1rem;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 1rem;

  p {
    margin: 0;
    font-size: 1.2rem;
  }
`;

const SmallButton = styled.button`
  width: 3rem;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 1rem;
  border-radius: 1rem;

  &:hover {
    transform: scale(1.03);
  }
`;

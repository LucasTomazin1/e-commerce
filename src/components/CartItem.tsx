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
  console.log(product);

  return (
    <Container>
      <img src={product.thumbnail} alt={product.title} />
      <ItemDetails>
        <h3>{product.title}</h3>
        <FlexDetails>
          <AlignPrices>
            <p>R$ {product.price.toFixed(2)}</p>
            <p>Total: R$ {(product.price * quantity).toFixed(2)}</p>
          </AlignPrices>
          <AlignButtons>
            <QuantityContainer>
              <SmallButton onClick={handleDecreaseQuantity}>-</SmallButton>
              <p>{quantity}</p>
              <SmallButton onClick={handleIncreaseQuantity}>+</SmallButton>
            </QuantityContainer>
            <SmallButton onClick={handleRemoveFromCart}>
              <FontAwesomeIcon icon={faTrash} />
            </SmallButton>
          </AlignButtons>
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

  @media (max-width: 1024px) {
    padding: 1.5rem;
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 0.5rem;
    gap: 0.5rem;
    align-items: center;

    img {
      margin: 1rem 0;
      max-width: 90px;
      max-height: 90px;
    }
  }
  @media (max-width: 480px) {
     img {
      margin: 0.5rem 0;
    }
  }

  @media (max-width: 320px) {
    padding: 0.25rem;
    gap: 0.25rem;
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
  @media (max-width: 480px) {
    text-align: center;
  }
`;

const FlexDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;

  p {
    font-size: 1.5rem;
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    p {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const AlignPrices = styled.div``;

const AlignButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem;

  @media (max-width: 480px) {
    margin: 0.5rem;
  }
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 1rem;
  border: solid 1px #242424;
  border-radius: 2rem;

  p {
    margin: 0;
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    gap: 0.7rem;
  }
`;

const SmallButton = styled.button`
  width: 3rem;
  border: solid 1px #242424;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 1rem;
  border-radius: 1rem;

  &:hover {
    transform: scale(1.03);
  }
  @media (max-width: 1024px) {
    width: 2.5rem;
    padding: 0.8rem;
  }

  @media (max-width: 768px) {
    width: 2rem;
    padding: 0.6rem;
  }
`;

import styled from "styled-components";
import { useCart } from "../contexts/CartContext";
import { CartItem } from "./CartItem";
import { Button } from "./Button";

export const Cart: React.FC = () => {
  const { state } = useCart();

  return (
    <Container>
      <CartItems>
        {state.items.map((cartItem) => (
          <CartItem
            key={cartItem.product.id}
            product={cartItem.product}
            quantity={cartItem.quantity}
          />
        ))}
      </CartItems>
      <ResumeContainer>
        <CartResume>
          <h2>Resumo do Pedido</h2>
          <p>
            Total de Itens:{" "}
            {state.items.reduce((total, item) => total + item.quantity, 0)}
          </p>
          <p>
            Valor Total: R${" "}
            {state.items
              .reduce(
                (acc, item) => acc + item.product.price * item.quantity,
                0
              )
              .toFixed(2)}
          </p>
        </CartResume>
        <Button>Finalizar compra</Button>
      </ResumeContainer>
    </Container>
  );
};

const Container = styled.section`
  padding: 10rem 15rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    padding: 1.5rem;
    justify-content: center;
  }

  @media (max-width: 320px) {
    padding: 1rem;
  }
`;

const CartItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 60%;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
    width: 30%;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const CartResume = styled.div`
  border-radius: 1rem;
  width: 100%;
  background-color: #333333;
  padding: 2rem;

  p {
    font-size: 1.5rem;
    margin-top: 1rem;
  }
    
`;

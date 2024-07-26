import styled from "styled-components";
import { useCart } from "../contexts/CartContext";
import { CartItem } from "./CartItem";
import { Button } from "./Button";

export const Cart: React.FC = () => {
  const { state } = useCart();

  return (
    <Container>
      <CartItems>
        {state.products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </CartItems>
      <ResumeContainer>
        <CartResume>
          <h2>Resumo do Pedido</h2>
          <p>Total de Itens: {state.products.length}</p>
          <p>
            Valor Total: R${" "}
            {state.products
              .reduce((acc, product) => acc + product.price, 0)
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
`;

const CartItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 60%;
`;

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  `;

const CartResume = styled.div`
  border-radius: 1rem;
  width: 25rem;
  background-color: #333333;
  padding: 2rem;

  p {
    font-size: 1.5rem;
    margin-top: 1rem;
  }
`;

import styled from "styled-components";
import { useCart } from "../contexts/CartContext";
import { CartItem } from "./CartItem";
import { Button } from "./Button";
import { useState } from "react";

export const Cart: React.FC = () => {
  const { state } = useCart();
  const [showInput, setShowInput] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handdleCupomInput = () => {
    setShowInput(!showInput);
  };

  const handleApplyCoupon = () => {
    if (coupon !== "") {
      setDiscount(0.5);
    } else {
      setDiscount(0);
      setErrorMessage("Adicione um cupom válido");
    }
  };

  const totalItems = state.items.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalValue = state.items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const discountedValue = totalValue * (1 - discount);

  return (
    <Container>
      {state.items.length > 0 ? (
        <>
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
              <p>Total de Itens: {totalItems}</p>
              <p>Valor Total: R$ {discountedValue.toFixed(2)}</p>
              <AddCupom href="#" onClick={handdleCupomInput}>
                Adicionar cupom
              </AddCupom>
              {showInput ? (
                <InputContainer>
                  <Input
                    type="text"
                    placeholder="Insira o cupom"
                    onChange={(e) => setCoupon(e.target.value)}
                  />
                  <button onClick={handleApplyCoupon}>Aplicar</button>
                  {errorMessage && <p>{errorMessage}</p>}
                </InputContainer>
              ) : null}
            </CartResume>
            <Button>Finalizar compra</Button>
          </ResumeContainer>
        </>
      ) : (
        <EmptyMessage>
          <p>Seu carrinho está vazio.</p>
        </EmptyMessage>
      )}
    </Container>
  );
};

const AddCupom = styled.a`
  font-size: 1.5rem;
  text-decoration: underline;
`;

const InputContainer = styled.div`
  button {
    cursor: pointer;
    padding: 0.5rem;
    border: none;
    background-color: #242424;
    border-radius: 0.5rem;
  }
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-right: 0.5rem;
  border: none;
  background-color: #242424;
  border-radius: 0.5rem;
`;

const EmptyMessage = styled.div`
  text-align: center;
  width: 100%;
  font-size: 1.5rem;
  color: #555;
`;

const Container = styled.section`
  padding: 10rem 15rem;
  display: flex;
  justify-content: space-evenly;
  min-height: calc(100vh - 8rem);

  @media (max-width: 1024px) {
    padding: 5rem 10rem;
  }

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

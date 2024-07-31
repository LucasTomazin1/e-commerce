import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { getProduct } from "../service/api";
import { Slider } from "./Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";
import { ToMercadoLivre } from "./ToMercadoLivre";
import { useCart } from "../contexts/CartContext";

interface ProductData {
  id: string;
  title: string;
  condition: string;
  pictures: { url: string }[];
  price: number;
  permalink: string;
  warranty: string;
}

export const Product: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductData | null>(null);
  const { dispatch } = useCart();

  useEffect(() => {
    if (id) {
      getProduct(id).then(setProduct);
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const handleAddToCart = () => {
    if(product) {
        dispatch({
            type: "ADD_TO_CART",
            product: {
                id: product.id,
                title: product.title,
                price: product.price,
                thumbnail: product.pictures[0].url,
                permalink: product.permalink,  
            },
        })
    }
  }

  return (
    <Container>
      <Slider pictures={product.pictures} />
      <ProductContainer>
        <Title>{product.title}</Title>
        <Condition>{product.condition === "new" ? "Novo" : "Usado"}</Condition>
        <Price>R$ {product.price.toFixed(2)}</Price>
        <Warranty>{product.warranty}</Warranty>
        <ButtonContainer>
          <ToMercadoLivre href={product.permalink}>
            Ver no Mercado Livre
          </ToMercadoLivre>
          <Button onClick={handleAddToCart}>
            <FontAwesomeIcon icon={faCartPlus} />
            Adicionar ao carrinho
          </Button>
        </ButtonContainer>
      </ProductContainer>
    </Container>
  );
};

const Container = styled.section`
  max-width: 100vw;
  display: flex;
  gap: 10rem;
  justify-content: center;
  padding: 5rem 10rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    padding: 1.5rem 5rem;
  }

  @media (max-width: 320px) {
    padding: 1rem;
  }
`;

const ProductContainer = styled.div`
  max-width: 40%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 90%;
    text-align: center;
  }

  @media (max-width: 480px) {
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin: 0 0 8px 0;
`;

const Price = styled.p`
  font-size: 2.4rem;
  font-weight: 700;
  margin: 0 0 8px 0;
`;

const Condition = styled.p`
  font-size: 14px;
  color: #aaa;
  margin: 0 0 16px 0;
`;

const Warranty = styled.p`
  font-size: 14px;
  color: #aaa;
  margin: 0 0 16px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 3rem;
  align-items: center;
`;

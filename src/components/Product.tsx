import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../service/api";
import { Slider } from "./Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";
import { ToMercadoLivre } from "./ToMercadoLivre";

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

  useEffect(() => {
    if (id) {
      fetchProduct(id).then(setProduct);
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <Container>
      <ProductContainer>
        <Slider pictures={product.pictures} />
        {/* <Images>
        {product.pictures.map((picture, index) => (
            <li key={index}>
            <Image src={picture.url} alt={product.title} />
            </li>
            ))}
            </Images> */}

        <Title>{product.title}</Title>
        <Condition>{product.condition === "new" ? "Novo" : "Usado"}</Condition>
        <Price>R$ {product.price.toFixed(2)}</Price>
        <Warranty>{product.warranty}</Warranty>
        <ButtonContainer>
          <ToMercadoLivre href={product.permalink}>
            Ver no Mercado Livre
          </ToMercadoLivre>
          <Button>
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
  justify-content: center;
`;

const ProductContainer = styled.div`
  max-width: 60rem;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 2rem;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin: 0 0 8px 0;
`;

const Price = styled.p`
  font-size: 2.4rem;
  font-weight: 700;
  color: #000;
  margin: 0 0 8px 0;
`;

const Condition = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0 0 16px 0;
`;

const Warranty = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0 0 16px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 3rem;
`;

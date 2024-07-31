import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { ToMercadoLivre } from "./ToMercadoLivre";
import { useCart } from "../contexts/CartContext";
import { useEffect, useState } from "react";
import { getProduct } from "../service/api";

interface ProductCardProps {
  thumbnail: string;
  title: string;
  price: number;
  id: string;
  permalink: string;
}

interface ProductData {
  pictures: { url: string }[];
}

export const ProductCard: React.FC<ProductCardProps> = ({
  thumbnail,
  price,
  title,
  id,
  permalink,
}) => {
  const [productData, setProductData] = useState<ProductData | null>(null);
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    const product = { id, title, price, thumbnail: thumbnail, permalink };
    dispatch({ type: "ADD_TO_CART", product });
  };

  useEffect(() => {
    if (id) {
      getProduct(id).then(setProductData);
    }
  }, [id]);
  const productImage =
    productData?.pictures && productData.pictures.length > 0
      ? productData.pictures[0].url
      : thumbnail;
  return (
    <>
      <Container>
        <InfoContainer>
          <StyledLink to={`/details/${id}`}>
            <Image src={productImage} alt={title} />
            <Title>{title}</Title>
            <Price>R$ {price.toFixed(2)}</Price>
          </StyledLink>
        </InfoContainer>
        <ButtonContainer>
          <ToMercadoLivre href={permalink} size="1.5rem">
            Comprar Agora
          </ToMercadoLivre>
          <Button onClick={handleAddToCart}>
            <StyledIcon icon={faCartPlus} />
          </Button>
        </ButtonContainer>
      </Container>
    </>
  );
};

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Container = styled.div`
  padding: 1rem;
  width: 35rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(26, 26, 26, 0.5);
  border-radius: 1rem;
  justify-content: space-between;
  gap: 0.5rem;

  @media (max-width: 768px) {
    width: 25rem;
  }

`;

const InfoContainer = styled.div`
  background-color: #333333;
  display: flex;
  border-radius: 1rem;
  justify-content: space-between;
  height: 100%;
  transition: ease-in-out 0.3s;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  width: 100%;
  align-items: center;
`;

const Title = styled.h2`
  margin: 1rem;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 600;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5; /* Limita o numero de linhas */
  -webkit-box-orient: vertical;
  max-width: 100%;

  @media (max-width: 1024px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const Price = styled.span`
  font-size: 2rem;
  font-weight: 500;
  margin: 1rem;
  margin-top: auto;

  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }

  @media (max-width: 320px) {
    font-size: 1.2rem;
  }
`;

const Image = styled.img`
  margin: 1rem;
  max-width: 30rem;
  width: auto;
  height: 20rem;
  object-fit: contain;

  @media (max-width: 768px) {
    max-width: 20rem;
    height: 15rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  text-align: center;
  width: 100%;
  gap: 0.5rem;
`;

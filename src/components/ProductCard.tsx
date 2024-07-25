import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { ToMercadoLivre } from "./ToMercadoLivre";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  id: string;
  permalink: string;
}
export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  price,
  title,
  id,
  permalink,
}) => {
  return (
    <>
      <Container>
        <InfoContainer>
          <StyledLink to={`/details/${id}`}>
            <Image src={image} />
            <Title>{title}</Title>
            <Price>R$ {price.toFixed(2)}</Price>
          </StyledLink>
        </InfoContainer>
        <ButtonContainer>
          <ToMercadoLivre href={permalink} size="1.5rem">
            Comprar Agora
          </ToMercadoLivre>
          <Button>
            <FontAwesomeIcon icon={faCartPlus} />
          </Button>
        </ButtonContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 1rem;
  width: 25rem;
  height: 40rem;
  display: flex;
  flex-direction: column;
  background-color: rgba(26, 26, 26, 0.5);
  border-radius: 1rem;
  justify-content: space-between;
  gap: 1rem;
`;

const InfoContainer = styled.div`
  background-color: #333333;
  display: flex;
  border-radius: 1rem;
  justify-content: space-between;
  height: 100%;
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
  font-size: 1.8rem;
  font-weight: 600;
`;

const Price = styled.span`
  font-size: 2rem;
  font-weight: 500;
  margin-top: auto;
`;

const Image = styled.img`
  margin: 1rem;
  max-width: 12rem;
  height: auto;
  border-radius: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  text-align: center;
  width: 100%;
  gap: 0.5rem;
`;

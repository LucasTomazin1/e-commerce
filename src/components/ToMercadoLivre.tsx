import styled from "styled-components";

interface ToMercadoLivreProps {
  href: string;
  children: React.ReactNode;
  size?: string;
}

export const ToMercadoLivre: React.FC<ToMercadoLivreProps> = ({
  href,
  children,
  size,
}) => {
  return (
    <ToMercadoLivreStyled
      href={href}
      size={size}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </ToMercadoLivreStyled>
  );
};

// noopener: Garante que a nova página não pode manipular a página de origem.
// noreferrer: Garante que a nova página não recebe informações sobre a URL da página de origem.
// Quando usados juntos (rel="noopener noreferrer"), eles fornecem uma proteção adicional:

const ToMercadoLivreStyled = styled.a<ToMercadoLivreProps>`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 2rem;
  background-color: #333333;
  text-decoration: none;
  border-radius: 1rem;
  font-size: ${(props) => props.size || "2rem"};
  width: 100%;
  transition: ease-in-out 0.3s;

  &:hover {
    transform: scale(1.03);
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 1.4rem;
    width: 50%;
  }

  @media (max-width: 480px) {
    width: 100%;

  }
`;

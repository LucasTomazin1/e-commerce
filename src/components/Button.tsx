import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};


const StyledButton = styled.button`
  font-family: montserrat, inter, sans-serif;
  font-size: 2rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 2rem;
  background-color: #333333;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  transition: ease-in-out 0.3s;

  &:hover {
    transform: scale(1.03);
  }
`;

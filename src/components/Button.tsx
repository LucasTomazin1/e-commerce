import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

const StyledButton = styled.button`
  font-family: montserrat, inter, sans-serif;
  font-size: 2rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 100%;
  padding: 2rem;
  background-color: #333333;
  border: none;
  border-radius: 1rem;
 cursor: pointer;
`;

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const SearchBar: React.FC = () => {
  return (
    <Container>
      <Input placeholder="O que você procura?" />
      <Button>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 45rem;
  height: 4rem;
  align-items: center;
  border-radius: 2rem;
  overflow: hidden;
  border: solid 1.5px #1a1a1a;
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  font-size: 2rem;

  border: none;
  background-color: rgba(26, 26, 26, 0.5);
  padding: 0 1rem;
  outline: none;
`;
const Button = styled.button`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba(26, 26, 26, 0.4);
  border: none;
  padding: 1.5rem 2rem;
  border-left-radius: 2rem;
  cursor: pointer;
  outline: none;
`;

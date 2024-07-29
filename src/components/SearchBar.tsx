import { useState, ChangeEvent, useContext } from "react";
import styled from "styled-components";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchContext } from "../contexts/SearchContext";

export const SearchBar: React.FC = () => {
  const [search, setSearch] = useState("");
  const { setQuery } = useContext(SearchContext);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onClickHandler = () => {
    if (search !== "") {
      setQuery(search);
    }
  };

  const onEnterHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (search !== "") {
        setQuery(search);
      }
    }
  };

  return (
    <Container>
      <Input
        placeholder="O que você procura?"
        onChange={onChangeHandler}
        onKeyPress={onEnterHandler}
      />
      <SearchButton onClick={onClickHandler}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </SearchButton>
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

  @media (max-width: 768px) {
    width: 35rem;
    height: 3.5rem;
  }

  @media (max-width: 480px) {
    width: 22rem;
  }

  @media (max-width: 320px) {
    width: 15rem;
  }
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  font-size: 2rem;

  border: none;
  background-color: rgba(26, 26, 26, 0.5);
  padding: 0 1rem;
  outline: none;

    @media (max-width: 768px) {
    font-size: 1.8rem;
    padding: 0 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    padding: 0 0.6rem;
  }

  @media (max-width: 320px) {
    font-size: 1.2rem;
    padding: 0 0.5rem;
  }
`;
const SearchButton = styled.button`
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


  @media (max-width: 768px) {
    padding: 1.2rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 1.2rem;
  }

  @media (max-width: 320px) {
    padding: 0.8rem 1rem;
  }
`;

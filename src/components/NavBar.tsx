import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { SearchBar } from "./SearchBar";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext"

export const NavBar: React.FC = () => {
    //buscando status do carrinho
    const { state } = useCart()
    const itemCount = state.items.length
  return (
    <Container>
      <Nav>
        <Link to="/">
          <Logo>LOGO</Logo>
        </Link>
        <SearchBar />
        <Link to="/cart/">
          <Cart>
            <FontAwesomeIcon icon={faCartShopping} />
            {/* renderiza se o status do cart for maior que 0 */}
            {itemCount > 0 && <CardStatus>{itemCount}</CardStatus>}
          </Cart>
        </Link>
      </Nav>
    </Container>
  );
};

const Container = styled.header`
  width: 100vw;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  background-color: #333333;
  color: white;
`;

const Logo = styled.div`
  font-size: 2rem;
`;

const Cart = styled.div`
  font-size: 2rem;
  position: relative;
  cursor: pointer;
    transition: ease-in-out 0.3s;

  &:hover {
    transform: scale(1.03);
  }
`;

const CardStatus = styled.span`
  position: absolute;
  top: -3px;
  right: -1rem;
  font-size: 1rem;
  padding: 0 0.5rem;
  font-weight: 700;
  background-color: red;
  border-radius: 3rem;
`;

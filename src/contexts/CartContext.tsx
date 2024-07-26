import { createContext, useContext, useReducer, ReactNode } from "react";

//produto no carrinho
interface Product {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  permalink: string;
}
//lista de produtos
interface CartState {
  products: Product[];
}
//ações e quem receeb
interface CartAction {
  type: "ADD_TO_CART" | "REMOVE_FROM_CART";
  product: Product;
}

// CartContext Cria um contexto que armazena o estado do carrinho e a função dispatch para modificar o estado. state é iniciado como um objeto com uma lista de produtos vazia, e dispatch é uma função vazia por padrão.

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({ state: { products: [] }, dispatch: () => null });

//O switch é uma estrutura de controle de fluxo que permite executar diferentes blocos de código com base no valor de uma expressão (action.type)

//filter buscando somente os itens que tiverem o id diferente do produto selecionado

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { products: [...state.products, action.product] };
    case "REMOVE_FROM_CART":
      return {
        products: state.products.filter((p) => p.id !== action.product.id),
      };
    default:
      return state;
  }
};

//   CartProvider que envolve a árvore de componentes da aplicação, fornecendo o estado do carrinho e a função dispatch a todos os componentes filhos.

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, { products: [] });
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook que facilita o acesso ao contexto do carrinho. Ele usa useContext para retornar o estado e a função dispatch do CartContext.
export const useCart = () => useContext(CartContext);

import { ReactNode, createContext, useReducer } from 'react';
import { Idata, action } from '../types/type';
const initialState = {};
const reducer = (state: Idata[], action: action) => {
  switch (action.type) {
    case 'add':
      [...state, action.payload];
      break;

    default:
      return state;
  }
};
const CartContext = createContext([]);
const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;

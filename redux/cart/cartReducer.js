import { getStorage, saveStorage } from "./localStorage";


const initialState = {cart: getStorage()}

export const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
          if(state.cart.find(p => p.id == action.payload.product.id)) {
            state.cart = state.cart.map((p) =>
            p.id == action.payload.product.id ? { ...p, qty: p.qty + action.payload.qty } : p
          );
          } else {
            state.cart = [
              ...state.cart,
              { ...action.payload.product, qty: action.payload.qty },
            ];
          }
         saveStorage(state.cart);
         return {
            ...state,
            cart: state.cart,
          };
        case 'INCREMENT':
            state.cart = state.cart.map((p) =>
            p.id == action.payload ? { ...p, qty: p.qty + 1 } : p
          );
          saveStorage(state.cart);
          return {
            ...state,
            cart: state.cart,
          };
          case 'DECREMENT':
            state.cart = state.cart.map((p) =>
            p.id == action.payload ? { ...p, qty: p.qty - 1 } : p
          );
          saveStorage(state.cart);
          return {
            ...state,
            cart: state.cart,
          };
          case 'REMOVE_FROM_CART':
            state.cart = state.cart.filter(p => p.id != action.payload);
            saveStorage(state.cart);
          return {
            ...state,
            cart: state.cart,
          };
          default:
            return state;
    }
}
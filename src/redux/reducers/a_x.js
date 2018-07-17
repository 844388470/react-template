import { createStore,combineReducers } from "redux";

const initialState = {
    cart: [
      {
        product: 'bread 700g',
        quantity: 2,
        unitCost: 90
      },
      {
        product: 'milk 500ml',
        quantity: 1,
        unitCost: 47
      }
    ]
}
const ADD_TO_CART = 'ADD_TO_CART';

export const cartReducer = function(state=initialState, action) {
    switch (action.type) {
        case ADD_TO_CART: {
          return {
              ...state,
              cart: [...state.cart, action.payload]
          }
        }
    
        default:
          return state;
      }
}
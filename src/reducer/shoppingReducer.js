import { TYPES } from "@/actions/actions";

const {ADD_TO_CART, REMOVE_ONE_ITEM, REMOVE_ALL_ITEMS, CLEAR_CART} = TYPES;

export function shoppingReducer (state, action) {
    switch (action.type) {
        case ADD_TO_CART: {}
        case REMOVE_ONE_ITEM: {}
        case REMOVE_ALL_ITEMS: {}
        case CLEAR_CART: {}    
        default:
            return state;
    }
}
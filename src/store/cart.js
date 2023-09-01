const ADD_CART = 'cart/ADD_CART';
const REMOVE_CART = 'cart/REMOVE_CART';

export default function cartReducer(state = {}, action) {
    const newState = { ...state };
    switch (action.type) {
        case ADD_CART:
            newState[action.id] = {
                ...action,
                count: 1
            };
            return newState;

        case REMOVE_CART:
            delete newState[action.id];
            return newState;

        default:
            return state;
    }
};

export const addCart = (id) => {
    return {
        type: ADD_CART,
        id: id
    };
};

export const removeCart = (id) => {
    return {
        type: REMOVE_CART,
        id: id
    };
};

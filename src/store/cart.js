const ADD_CART = 'cart/ADD_CART';

export default function cartReducer(state = {}, action) {
    switch (action.type) {
        case ADD_CART:
            const produceId = action.id;
            const newState = {
                ...state,
                [produceId]: {
                    id: produceId,
                    count: 1
                }
            };
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


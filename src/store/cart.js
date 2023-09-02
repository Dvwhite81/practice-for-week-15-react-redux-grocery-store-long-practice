const ADD_CART = "cart/ADD_CART";
const REMOVE_CART = "cart/REMOVE_CART";
const PLUS_ONE = "cart/PLUS_ONE";
const MINUS_ONE = "cart/MINUS_ONE";
const CHANGE_COUNT = "cart/CHANGE_COUNT";
const EMPTY_CART = "cart/EMPTY_CART";

export default function cartReducer(state = {}, action) {
  const newState = { ...state };
  const id = action.id;

  switch (action.type) {
    case ADD_CART:
      if (newState[id]) {
        newState[id].count++;
      } else {
        newState[id] = {
          ...action,
          count: 1,
        };

      }
      return newState;

    case REMOVE_CART:
      delete newState[id];
      return newState;

    case PLUS_ONE:
      newState[id].count++;
      return newState;

    case MINUS_ONE:
      newState[id].count--;
      return newState;

    case CHANGE_COUNT:
      const newCount = action.count;
      newState[id].count = newCount;
      return newState;

    case EMPTY_CART:
        return {};

    default:
      return state;
  }
}

export const addCart = (id) => {
  return {
    type: ADD_CART,
    id: id,
  };
};

export const removeCart = (id) => {
  return {
    type: REMOVE_CART,
    id: id,
  };
};

export const plusOne = (id) => {
  return {
    type: PLUS_ONE,
    id: id,
  };
};

export const minusOne = (id) => {
  return {
    type: MINUS_ONE,
    id: id,
  };
};

export const changeCount = (id, count) => {
  return {
    type: CHANGE_COUNT,
    id: id,
    count: count,
  };
};

export const emptyCart = () => {
  return {
    type: EMPTY_CART,
  };
};

import produceData from '../mockData/produce.json';

const POPULATE = 'produce/populate';
const TOGGLE_LIKE = 'produce/toggleLike';

export const populateProduce = () => {
  return {
    type: POPULATE,
    produce: produceData
  };
};

export const toggleLike = (id) => {
  return {
    type: TOGGLE_LIKE,
    id: id
  };
};

const produceReducer = (state = {}, action) => {
  const id = action.id;
  const newState = { ...state };

  switch (action.type) {
    case POPULATE:
      action.produce.forEach((produce) => {
        newState[produce.id] = produce;
      });
      return newState;

    case TOGGLE_LIKE:
      newState[id].liked = !newState[id].liked;
      return newState;
      
    default:
      return state;
  }
};

export const getAllProduce = (state) => Object.values(state.produce);

export default produceReducer;

import * as actions from '../types.js';
const inititalState = [];

const rocketsReducer = (state=inititalState, action) => {
  switch (action.type) {
    case actions.GET_ROCKETS:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default rocketsReducer;

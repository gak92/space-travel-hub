import * as actions from '../types';

const inititalState = [];

const rocketsReducer = (state = inititalState, action) => {
  switch (action.type) {
    case `${actions.GET_ROCKETS}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export default rocketsReducer;

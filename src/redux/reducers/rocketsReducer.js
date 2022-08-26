import * as actions from '../types';

const inititalState = [];

const rocketsReducer = (state = inititalState, action) => {
  switch (action.type) {
    case `${actions.GET_ROCKETS}/fulfilled`:
      return action.payload;
    case actions.ROCKET_RESERVED:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: !rocket.reserved };
      });
    default:
      return state;
  }
};

export default rocketsReducer;

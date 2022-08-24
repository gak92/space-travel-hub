import * as actions from '../types';

const inititalState = [];

const missionsReducer = (state = inititalState, action) => {
  switch (action.type) {
    case `${actions.GET_MISSIONS}/fulfilled`:
      return action.payload;
    case actions.MISSIONS_ACTIONS:
      return state.map((mission) => {
        if (mission.id !== action.payload) return mission;
        return { ...mission, reserved: !mission.reserved };
      });
    default:
      return state;
  }
};

export default missionsReducer;

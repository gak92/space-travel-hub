import { combineReducers } from '@reduxjs/toolkit';
import rockets from './rocketsReducer';
import missions from './missionsReducer';

const rootReducer = combineReducers({
  rockets,
  missions,
});

export default rootReducer;

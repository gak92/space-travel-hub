import * as api from '../../api';
import * as actions from '../types.js';

export const getRockets = () => ({
  type: actions.GET_ROCKETS,
  payload: api.getRockets(),
});

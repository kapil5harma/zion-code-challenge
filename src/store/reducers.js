import { combineReducers } from 'redux';
import { dashboardReducer } from '../containers/Dashboard/store';

const rootReducer = combineReducers({
  dashboard: dashboardReducer
});

export default rootReducer;

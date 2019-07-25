import { all } from 'redux-saga/effects';

import es6promise from 'es6-promise';
import { watchDashboard } from '../containers/Dashboard/store';

es6promise.polyfill();

export function* rootSaga() {
  yield all([...watchDashboard]);
}

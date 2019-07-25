// import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { Creators, Types } from './actions';
import { unsplash } from '../../../utils/Utils';
import { toJson } from 'unsplash-js';

// ****************************** Fetch User Photos Saga ******************************
function* fetchUserPhotosSaga(action) {
  console.log('action.payload: ', action.payload);
  try {
    yield put(Creators.fetchUserPhotosStart());
    const { username } = action.payload;

    const res = yield unsplash.users
      .photos(username, 1, 10, 'popular', false)
      .then(toJson)
      .then(json => json);
    console.log('res: ', res);

    yield put(Creators.fetchUserPhotosSuccess({ userPhotos: res, username }));
  } catch (err) {
    console.log('err: ', err);
    yield put(Creators.fetchUserPhotosFailure(err));
  }
}
// ______________________________________________________________________________

// ****************************** Search User Saga ******************************
function* searchChangeSaga(action) {
  try {
    yield put(Creators.searchChangeStart());
    const { username } = action.payload;

    const res = yield unsplash.search
      .users(username, 1, 10, 'popular', false)
      .then(toJson)
      .then(json => json);

    const results = yield res.results.map(user => {
      const { username, name } = user;
      return { title: username || name };
    });

    yield put(Creators.searchChangeSuccess({ results }));
  } catch (err) {
    console.log('err: ', err);
    yield put(Creators.searchChangeFailure(err));
  }
}
// ______________________________________________________________________________

export const watchDashboard = [
  takeLatest(Types.FETCH_USER_PHOTOS, fetchUserPhotosSaga),
  takeLatest(Types.SEARCH_CHANGE, searchChangeSaga)
];

import { createReducer } from 'reduxsauce';
import { Types } from './actions';

const INITIAL_STATE = {
  loading: false,
  userPhotos: [],
  userList: []
};

// ************************************ Fetch User Photos *************************************
const fetchUserPhotosStart = (state = INITIAL_STATE) => ({ ...state, loading: true });

const fetchUserPhotosSuccess = (state = INITIAL_STATE, action) => {
  const { userPhotos, username } = action.payload;

  return {
    ...state,
    userPhotos,
    userList: [username, ...state.userList],
    loading: false
  };
};

const fetchUserPhotosFailure = (state = INITIAL_STATE) => ({ ...state, loading: false });
// ____________________________________________________________________________________________

// ************************************ Search Change *****************************************
const searchChangeStart = (state = INITIAL_STATE) => ({ ...state, loading: true });

const searchChangeSuccess = (state = INITIAL_STATE, action) => {
  const { results } = action.payload;

  return {
    ...state,
    results,
    loading: false
  };
};

const searchChangeFailure = (state = INITIAL_STATE) => ({ ...state, loading: false });
// ____________________________________________________________________________________________

// Define Handlers
const HANDLERS = {
  [Types.FETCH_USER_PHOTOS_START]: fetchUserPhotosStart,
  [Types.FETCH_USER_PHOTOS_FAILURE]: fetchUserPhotosFailure,
  [Types.FETCH_USER_PHOTOS_SUCCESS]: fetchUserPhotosSuccess,

  [Types.SEARCH_CHANGE_START]: searchChangeStart,
  [Types.SEARCH_CHANGE_FAILURE]: searchChangeFailure,
  [Types.SEARCH_CHANGE_SUCCESS]: searchChangeSuccess
};

// Create and Export Reducer
export const dashboardReducer = createReducer(INITIAL_STATE, HANDLERS);

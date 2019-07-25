import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  fetchUserPhotos: ['payload'],
  fetchUserPhotosStart: null,
  fetchUserPhotosSuccess: ['payload'],
  fetchUserPhotosFailure: null,

  searchChange: ['payload'],
  searchChangeStart: null,
  searchChangeSuccess: ['payload'],
  searchChangeFailure: null
});

export { Types, Creators };

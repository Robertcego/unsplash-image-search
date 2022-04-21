import { GET_PHOTOS, GET_AUTHOR, SEARCH_PHOTOS } from '../actions/index';

const initialState = {
  photos: [],
  searchPhotos: [],
  author: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTOS:
      return {
        ...state,
        photos: action.payload,
      };
    case GET_AUTHOR:
      return {
        ...state,
        author: action.payload,
      };
    case SEARCH_PHOTOS:
      return {
        ...state,
        searchPhotos: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;

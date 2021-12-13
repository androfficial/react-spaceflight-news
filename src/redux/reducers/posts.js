import { Types } from '../actions/posts';

const initialState = {
  posts: [],
  isLoaded: false,
  errorApi: false,
};

const feed = (state = initialState, action = {}) => {
  switch (action.type) {
    case Types.SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case Types.SET_IS_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    case Types.SET_ERROR_API:
      return {
        ...state,
        errorApi: action.payload,
      };
    default:
      return state;
  }
};

export default feed;

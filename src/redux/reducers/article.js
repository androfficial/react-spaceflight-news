import { Types } from '../actions/article';

const initialState = {
  article: {},
  isLoaded: false,
  errorApi: false,
};

const userProfile = (state = initialState, action = {}) => {
  switch (action.type) {
    case Types.SET_ARTICLE:
      return {
        ...state,
        article: action.payload,
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

export default userProfile;

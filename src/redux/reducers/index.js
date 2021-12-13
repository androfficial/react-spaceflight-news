import { combineReducers } from 'redux';

import posts from './posts';
import article from './article';

export default combineReducers({
  posts,
  article,
});

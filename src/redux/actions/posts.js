import mainAPI from '@api/api';

export const Types = {
  SET_POSTS: 'POSTS@SET:POSTS',
  SET_IS_LOADED: 'POSTS@SET:IS_LOADED',
  SET_ERROR_API: 'POSTS@SET:ERROR_API',
};

export const setPosts = (payload) => ({
  type: Types.SET_POSTS,
  payload,
});

export const setIsLoaded = (payload) => ({
  type: Types.SET_IS_LOADED,
  payload,
});

export const setErrorApi = (payload) => ({
  type: Types.SET_ERROR_API,
  payload,
});

export const fetchPosts = () => async (dispatch) => {
  const response = await mainAPI.getPosts();
  if (response) {
    dispatch(setPosts(response));
    dispatch(setIsLoaded(true));
  } else {
    dispatch(setErrorApi(true));
  }
};

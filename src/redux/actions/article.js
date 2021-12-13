import mainAPI from '@api/api';

export const Types = {
  SET_ARTICLE: 'ARTICLE@SET:ARTICLE',
  SET_IS_LOADED: 'ARTICLE@SET:IS_LOADED',
  SET_ERROR_API: 'ARTICLE@SET:ERROR_API',
};

export const setArticle = (payload) => ({
  type: Types.SET_ARTICLE,
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

export const fetchArticle = (id) => async (dispatch) => {
  const response = await mainAPI.getArticle(id);
  if (response) {
    dispatch(setArticle(response));
    dispatch(setIsLoaded(true));
  } else {
    dispatch(setErrorApi(true));
  }
};

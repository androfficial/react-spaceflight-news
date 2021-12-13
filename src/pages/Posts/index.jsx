/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Fail, Post, Preloader } from '@components';
import { TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { setIsLoaded, fetchPosts } from '@redux/actions/posts';

const Posts = () => {
  const dispatch = useDispatch();

  const [allPosts, isLoaded, errorApi] = useSelector(({ posts }) => [
    posts.posts,
    posts.isLoaded,
    posts.errorApi,
  ]);

  useEffect(() => {
    dispatch(fetchPosts());
    return () => dispatch(setIsLoaded(false));
  }, [dispatch]);

  return (
    <div className='page__posts posts'>
      <div className='posts__container _container'>
        <div className='posts__top top-posts'>
          <Typography
            sx={{ fontWeight: '500' }}
            component='h3'
            className='top-posts__title'
          >
            Filter by keywords
          </Typography>
          <div className='top-posts__search-wrapper'>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <SearchIcon
                    sx={{ width: '24px', height: '24px', marginRight: '10px' }}
                    htmlColor='#575757'
                  />
                ),
              }}
              variant='outlined'
              className='top-posts__search-input'
              placeholder='The most successful IT companies in 2020'
            />
          </div>
        </div>
        {errorApi ? (
          <Fail addClass='posts__fail' />
        ) : (
          <div className='posts__bottom'>
            <Typography
              sx={{ fontWeight: '500' }}
              component='h3'
              className='posts__results'
            >
              Results: 6
            </Typography>
            {isLoaded ? (
              <div className='posts__items'>
                {allPosts.map((obj, i) => (
                  <Post key={`${obj.id}_${i}`} {...obj} />
                ))}
              </div>
            ) : (
              <Preloader addClass='posts__preloader' text='Posts are loading' />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Posts;

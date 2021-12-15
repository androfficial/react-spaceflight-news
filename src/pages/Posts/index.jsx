/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Fail, Post, Preloader } from '@components';
import { TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { setIsLoaded, fetchPosts } from '@redux/actions/posts';

const Posts = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const [allPosts, isLoaded, errorApi] = useSelector(({ posts }) => [
    posts.posts,
    posts.isLoaded,
    posts.errorApi,
  ]);

  const handleChangeValue = (e) => setValue(e.target.value);

  // Фильтрация по ключевым словам
  const filteredPosts = useMemo(() => {
    if (value) {
      return allPosts.reduce((acc, obj) => {
        const matchValue = value.toLowerCase();
        const { title, summary } = obj;

        if (title.toLowerCase().includes(matchValue)) {
          return [obj, ...acc];
        }

        if (summary.toLowerCase().includes(matchValue)) {
          return [...acc, obj];
        }

        return acc;
      }, []);
    }
    return allPosts;
  }, [value, allPosts]);

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
              value={value}
              onChange={handleChangeValue}
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
              fullWidth
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
              Results: {filteredPosts.length}
            </Typography>
            {isLoaded ? (
              <div className='posts__items'>
                {filteredPosts.map((obj, i) => (
                  <Post key={`${obj.id}_${i}`} {...obj} value={value} />
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

import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Posts, Article } from '@pages';
import { NotFound } from '@components';
import removeContentShift from '@services/removeContentShift';

const App = () => {
  useEffect(() => {
    removeContentShift();
  }, []);

  return (
    <main className='page'>
      <Routes>
        <Route path='/' element={<Navigate to='/posts' />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/posts/:id' element={<Article />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default App;

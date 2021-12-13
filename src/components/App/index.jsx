import { Routes, Route, Navigate } from 'react-router-dom';

import { Posts, Article } from '@pages';
import { NotFound } from '@components';

const App = () => (
  <main className='page'>
    <Routes>
      <Route path='/' element={<Navigate to='/posts' />} />
      <Route path='/posts' element={<Posts />} />
      <Route path='/posts/:id' element={<Article />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </main>
);

export default App;

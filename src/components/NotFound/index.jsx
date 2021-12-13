import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@mui/material';

import NotFoundImage from '@assets/images/NotFound/not-found.png';

const NotFound = () => {
  const navigate = useNavigate();

  const goBack = useCallback(() => {
    navigate('/posts');
  }, [navigate]);

  return (
    <div className='not-found'>
      <img src={NotFoundImage} alt='Not Found' />
      <div className='not-found__btn-wrapper'>
        <Button fullWidth size='large' variant='contained' onClick={goBack}>
          Go to HomePage
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

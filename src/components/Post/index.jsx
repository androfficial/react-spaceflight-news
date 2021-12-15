import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import {
  East as EastIcon,
  DateRange as DateRangeIcon,
} from '@mui/icons-material';

import { Highlight } from '@components';
import RobotImg from '@assets/images/Post/1.png';

const Post = ({ id, imageUrl, title, summary, publishedAt, value }) => {
  const lighten = useCallback(
    (str) => <Highlight str={str} value={value} />,
    [value]
  );

  return (
    <Card
      sx={{
        color: 'inherit',
        boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
      }}
      variant='outlined'
      className='posts__item item-posts'
    >
      <Link className='item-posts__image-link' to={`/posts/${id}`}>
        <CardMedia component='img' image={imageUrl} alt={title} />
      </Link>
      <CardContent
        sx={{
          padding: '25px 20px 20px',
          flex: '1 1 auto',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            marginBottom: '25px',
            color: 'rgba(54, 54, 54, 0.6)',
          }}
        >
          <DateRangeIcon htmlColor='inherit' fontSize='small' />
          <Typography className='item-posts__data' component='h4'>
            {publishedAt}
          </Typography>
        </Box>
        <Link className='item-posts__title-link' to={`/posts/${id}`}>
          <Typography
            sx={{
              fontSize: '1.5rem',
              lineHeight: '1.25',
              marginBottom: '20px',
            }}
            component='h3'
          >
            {lighten(title)}
          </Typography>
        </Link>
        <Typography component='p'>{lighten(summary)}</Typography>
      </CardContent>
      <CardActions sx={{ padding: '0px 15px 25px' }}>
        <Link className='item-posts__article-link' to={`/posts/${id}`}>
          Read more
          <EastIcon
            htmlColor='inherit'
            sx={{
              width: '16px',
              height: '16px',
              flex: '0 0 16px',
              marginLeft: '6px',
            }}
          />
        </Link>
      </CardActions>
    </Card>
  );
};

Post.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  publishedAt: PropTypes.string,
  value: PropTypes.string,
};

Post.defaultProps = {
  imageUrl: RobotImg,
  title: 'This is default article title.',
  summary: 'This is default article description.',
  publishedAt: '31.12.2021',
  value: '',
};

export default Post;

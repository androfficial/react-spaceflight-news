import PropTypes from 'prop-types';
import cn from 'classnames';

import PreloaderSvg from '@assets/images/Preloader/preloader.svg';

const Preloader = ({ addClass, text }) => (
  <div className={cn(addClass && addClass, 'preloader')}>
    <div className='preloader__svg'>
      <img src={PreloaderSvg} alt='Preloader' />
    </div>
    <div className='preloader__text'>
      <strong>
        {text} <br />
        please wait...
      </strong>
    </div>
  </div>
);

Preloader.propTypes = {
  addClass: PropTypes.string,
  text: PropTypes.string,
};

Preloader.defaultProps = {
  addClass: '',
  text: 'Loading',
};

export default Preloader;

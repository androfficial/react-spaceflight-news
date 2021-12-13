import PropTypes from 'prop-types';
import cn from 'classnames';

const Fail = ({ addClass }) => (
  <div className={cn(addClass && addClass, 'fail')}>
    <strong className='fail__text'>
      Oops, something went wrong... <br />
      Try refreshing page.
    </strong>
  </div>
);

Fail.propTypes = {
  addClass: PropTypes.string,
};

Fail.defaultProps = {
  addClass: '',
};

export default Fail;

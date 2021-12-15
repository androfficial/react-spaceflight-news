import isMobile from './mobileDetect';

const removeContentShift = () => {
  if (!isMobile.any()) {
    document.documentElement.classList.add('_web');
  }
};

export default removeContentShift;

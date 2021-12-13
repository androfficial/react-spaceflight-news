const textTransform = (text) =>
  text.length >= 100 ? `${text.slice(0, 100)}...` : text;

export default textTransform;

import React from 'react';

const highlightText = ({ str, value }) => {
  if (!value) {
    return str;
  }
  const regexp = new RegExp(value, 'ig');
  const matchValue = str.match(regexp);

  if (matchValue) {
    return str.split(regexp).map((substr, index, array) => {
      if (index < array.length - 1) {
        const foundDelMatch = matchValue.shift();
        return (
          <React.Fragment key={`${foundDelMatch}_${index}`}>
            {substr}
            <span className='_highlight'>{foundDelMatch}</span>
          </React.Fragment>
        );
      }
      return substr;
    });
  }

  return str;
};

export default highlightText;

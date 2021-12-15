import React from 'react';

import textTransform from '@services/textTransform';

const highlightText = ({ str, value }) => {
  const formattedStr = textTransform(str);
  if (!value) {
    return formattedStr;
  }
  const regexp = new RegExp(value, 'ig');
  const matchValue = formattedStr.match(regexp);

  if (matchValue) {
    return formattedStr.split(regexp).map((substr, index, array) => {
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

  return formattedStr;
};

export default highlightText;

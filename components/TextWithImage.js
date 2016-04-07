import React from 'react';
import classNames  from 'classnames';

export default ({variant, imageSrc, headline, textline, children}) => {
  const textWithImageClass = classNames({
    'text-with-image': true,
  });

  return (
    <div className={textWithImageClass}>
      <div className="inner">
        <div className="text-with-image__image">
          <img src={imageSrc} alt={headline} />
        </div>
        <div className="text-with-image__text">
          <h2>{headline}</h2>
          <p>{textline}</p>
          {children}
        </div>
      </div>
    </div>
  );
}

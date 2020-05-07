import React from 'react';

import styles from './ErrorView.module.scss';
import icon from './error-picture.png';

const ErrorIndicator = () => {
  return (
    <div className={styles.ErrorIndicator}>
      <h2>Произошла ужасная ошибка</h2>
      <p>(но мы всё исправим)</p>
      <img src={icon} alt="error pic" className={styles.Img} />
    </div>
  );
};

export default ErrorIndicator;

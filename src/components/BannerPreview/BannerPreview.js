import React, { useState, useEffect } from 'react';

import styles from './BannerPreview.module.scss';

const BannerPreview = React.forwardRef(
  ({ title, verticalImgUrl, horizontalImgUrl, targetUrl, type, bannerId }, ref) => {
    const [orientation, setOrientation] = useState('landscape');

    useEffect(() => {
      const getOrientation = (orientation) => orientation.split('-')[0];

      const handleOrientationChange = () => {
        setOrientation(getOrientation(window.screen.orientation.type));
      };

      setOrientation(getOrientation(window.screen.orientation.type));

      window.addEventListener('orientationchange', handleOrientationChange);

      return () => window.removeEventListener('orientationchange', handleOrientationChange);
    }, []);

    const contentInlineStyles = {
      flexDirection: type === 'Прямой' ? 'column' : 'column-reverse',
    };

    const imgUrl = orientation === 'landscape' ? horizontalImgUrl : verticalImgUrl;

    return (
      <div ref={ref} className={styles.BannerPreview} id={bannerId}>
        <img src={imgUrl} alt="" className={styles.BannerImg} />
        <div style={contentInlineStyles} className={styles.BannerContent}>
          <h2 className={styles.BannerTitle}>{title}</h2>
          <a href={targetUrl} className={styles.Link} target="_blank" rel="noopener noreferrer">
            Перейти
          </a>
        </div>
      </div>
    );
  },
);

export default BannerPreview;

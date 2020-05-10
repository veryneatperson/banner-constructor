import React, { useState, useRef, useEffect } from 'react';
import debounce from 'lodash.debounce';

import styles from './App.module.scss';
import NavMenu from '../NavMenu/NavMenu';
import BannerForm from '../BannerForm/BannerForm';
import BannerPreview from '../BannerPreview/BannerPreview';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { isScrolledIntoView } from '../../helpers';
import { formId, bannerId } from '../../constants';

const App = () => {
  const [banner, setBanner] = useState(null);
  const [pageHash, setPageHash] = useState(`#${formId}`);

  const formRef = useRef(null);
  const bannerRef = useRef(null);

  useEffect(() => {
    if (bannerRef.current) {
      bannerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [banner]);

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      if (window.location.hash === `#${formId}`) {
        setPageHash(`#${formId}`);
      } else if (window.location.hash === `#${bannerId}`) {
        setPageHash(`#${bannerId}`);
      }
    });
  }, []);

  const addBanner = (banner) => setBanner(banner);

  const handleHashChange = (hash) => {
    window.history.pushState(null, null, hash);
    setPageHash(hash);
  };

  const handleHashChangeOnFormSubmit = handleHashChange.bind(null, `#${bannerId}`);

  const handleScroll = () => {
    if (isScrolledIntoView(formRef.current)) {
      handleHashChange(`#${formId}`);
    } else if (bannerRef.current && isScrolledIntoView(bannerRef.current)) {
      handleHashChange(`#${bannerId}`);
    }
  };

  const debouncedHandleScroll = debounce(handleScroll, 200);

  return (
    <ErrorBoundary>
      <div className={styles.Container} onScroll={debouncedHandleScroll}>
        <div className={styles.Aside}>
          <NavMenu hasBanner={Boolean(banner)} pageHash={pageHash} />
        </div>
        <div className={styles.Content}>
          <BannerForm
            addBanner={addBanner}
            ref={formRef}
            handleHashChange={handleHashChangeOnFormSubmit}
            formId={formId}
          />
          {Boolean(banner) && <BannerPreview {...banner} ref={bannerRef} bannerId={bannerId} />}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default App;

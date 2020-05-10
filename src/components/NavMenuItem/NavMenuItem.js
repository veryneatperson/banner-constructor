import React from 'react';
import cx from 'classnames';

import styles from './NavMenuItem.module.scss';

const NavMenuItem = ({ title, href, available, active }) => {
  const classes = cx(styles.NavMenuItem, { [styles.disabled]: !available, [styles.active]: active });

  return (
    <li className={classes}>
      <a href={href}>{title}</a>
    </li>
  );
};

export default NavMenuItem;

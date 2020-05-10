import React from 'react';
import styles from './NavMenu.module.scss';

import NavMenuItem from '../NavMenuItem/NavMenuItem';

const menuItems = [
  { title: 'Параметры', href: '#bannerForm' },
  { title: 'Предпросмотр', href: '#bannerPreview' },
];

const NavMenu = ({ hasBanner, pageHash }) => {
  return (
    <ul className={styles.NavMenu}>
      {menuItems.map(({ title, href }) => (
        <NavMenuItem
          key={title}
          title={title}
          href={href}
          active={pageHash === href}
          available={title === 'Предпросмотр' ? hasBanner : true}
        />
      ))}
    </ul>
  );
};

export default NavMenu;

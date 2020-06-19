import React from 'react';
import MenuItem from './components/HeaderMenu/HeaderMenu';
import Logo from './components/HeaderLogo/HeaderLogo';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <MenuItem />
    </div>
  );
};

export default Header;

import React from 'react';
import styles from './HeaderLogo.module.css';

const HeaderLogo = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.headerLogo}
        src='assets/images/headerLogo.png'
        alt='Logo'
      />
    </div>
  );
};

export default HeaderLogo;

import React from 'react';
import styles from './Footer.module.css';
import CompanyInfo from './components/CompanyInfo/CompanyInfo';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <CompanyInfo />
      </div>
      <sub>
        Designed with React by <a href='https://JoshLatour.com'>Josh Latour</a>
      </sub>
    </div>
  );
};

export default Footer;

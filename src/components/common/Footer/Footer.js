import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const link = 'https://JoshLatour.com';
  return (
    <div className={styles.container}>
      Designed with React by <a href={link}>Josh Latour</a>
    </div>
  );
};

export default Footer;

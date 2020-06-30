import React from 'react';
import styles from './CompanyInfo.module.css';

const CompanyInfo = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.location}>
          <div style={{ fontWeight: 'bold' }}>Discover Granite</div>
          1401 Gould Blvd <br />
          La Verne, TN 37086
        </div>
        <div className={styles.phone}>
          O: 615.837.2075 <br />
          F: 615.837.8675
        </div>
        <div className={styles.socialIcons}>
          <a href='http://www.facebook.com/1586925901419774'>
            <img
              className={styles.icon}
              src='assets/images/facebook.png'
              alt='Facebook'
            />
          </a>
          <a href='http://instagram.com/discovergraniteinc'>
            <img
              className={styles.icon}
              src='assets/images/instagram.png'
              alt='Facebook'
            />
          </a>
        </div>
      </div>
      <iframe
        title='Company Map'
        height='250'
        width='400'
        border='0'
        marginWidth='0'
        marginHeight='0'
        src='https://www.mapquest.com/embed/us/tn/la-vergne/37086-3514/1401-gould-blvd-36.011481,-86.614736?center=36.010973428136,-86.61532900000005&zoom=14&maptype=map'
      ></iframe>
    </div>
  );
};

export default CompanyInfo;

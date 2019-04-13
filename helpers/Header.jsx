import React from 'react';

import pkg from './../package.json';

import styles from './Header.css';

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.title}>IFramePlayground</h1>
    <span className={styles.version}>{pkg.version}</span>
  </header>
);

export default Header;

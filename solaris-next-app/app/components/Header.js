'use client';

import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/logo.jpg" alt="Логотип" className={styles.logo} />
      <h1 className={styles.text}>Новошахтинский драматический театр представляет</h1>
    </header>
  );
};

export default Header;

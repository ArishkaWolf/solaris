'use client';

import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="https://www.nmdt.ru" target="_blank" rel="noopener noreferrer">
        <img src="/logo.png" alt="Логотип" className={styles.logo} />
      </a>
      <a href="https://www.nmdt.ru" target="_blank" rel="noopener noreferrer" className={styles.link}>
        <h1 className={styles.text}>Новошахтинский драматический театр представляет</h1>
      </a>
    </header>
  );
};

export default Header;

import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/" className={styles.logo}>
          <p>BONOS</p>
          <p>
            LOGOS
          </p>
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLinks}>Home</Link>
        <Link href="/" className={styles.navLinks}>Gallery</Link>
        <Link href="/" className={styles.navLinks}>About</Link>
        <Link href="/" className={styles.navLinks}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
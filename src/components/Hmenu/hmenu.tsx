'use client';
import styles from '../../app/page.module.css';
import Link from 'next/link';
import { useState } from 'react';

export default function Hmenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => setMenuOpen(!menuOpen);
  const handleMenuClose = () => setMenuOpen(false);

  return (
    <>
      <div className={styles.hamburger} onClick={handleMenuClick}>
        <div className={styles.hamburgerBar}></div>
        <div className={styles.hamburgerBar}></div>
        <div className={styles.hamburgerBar}></div>
      </div>
      {menuOpen && (
        <>
          <div className={styles.menuOverlay} onClick={handleMenuClose}></div>
          <nav className={styles.menuDrawer}>
            <Link href="/detail" className={styles.menuLink} onClick={handleMenuClose}>お知らせの詳細</Link>
            <Link href="/report" className={styles.menuLink} onClick={handleMenuClose}>活動報告</Link>
            <Link href="/tips" className={styles.menuLink} onClick={handleMenuClose}>エレクトーンTips</Link>
          </nav>
        </>
      )}
    </>
  );
}

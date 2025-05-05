"use client";
import { useState } from 'react';
import Link from 'next/link';
import styles from '../app/page.module.css';

export default function HamburgerMenu() {
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
            <Link href="/" className={styles.menuLink} onClick={handleMenuClose}>トップページ</Link>
            <Link href="/test" className={styles.menuLink} onClick={handleMenuClose}>テスト</Link>
            <Link href="/detail" className={styles.menuLink} onClick={handleMenuClose}>お知らせの詳細</Link>
            <Link href="/report" className={styles.menuLink} onClick={handleMenuClose}>活動報告</Link>
            <Link href="/tips" className={styles.menuLink} onClick={handleMenuClose}>エレクトーンTips</Link>
          </nav>
        </>
      )}
    </>
  );
} 
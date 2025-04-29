'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import styles from './page.module.css';
import { ReactNode, useState } from 'react';
import Link from 'next/link';

interface MotionSectionProps {
  children: ReactNode;
  delay?: number;
}

const MotionSection = ({ children, delay = 0 }: MotionSectionProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
      className={styles.section}
    >
      {children}
    </motion.section>
  );
};

export default function Home() {
  return (
    <div className={styles.container}>
      
      <div className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/image.jpg"
            alt="ヒーロー画像"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>音風</h1>
          <div className={styles.heroUnderline}></div>
          <div className={styles.subtitle}>東京農工大学エレクトーンサークル</div>
          <div className={styles.heroIcons}>
            <a href="https://www.instagram.com/electone_ompoo/" target="_blank" rel="noopener noreferrer" className={styles.heroIcon}>
              <Image src="/images/instagram.svg" alt="Instagram" width={28} height={28} />
            </a>
            <a href="https://twitter.com/tuatelectoneweb" target="_blank" rel="noopener noreferrer" className={styles.heroIcon}>
              <Image src="/images/twitter.svg" alt="Twitter" width={28} height={28} />
            </a>
            <a href="https://line.me/ti/p/your_line_id" target="_blank" rel="noopener noreferrer" className={styles.heroIcon}>
              <Image src="/images/line.svg" alt="LINE" width={28} height={28} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.mainContent}>
        <MotionSection delay={0.2}>
          <h2 className={styles.sectionTitle}>サークル概要</h2>
          <div className={styles.content}>
            <p>音風はエレクトーンを通して音楽と部員同士の交流を楽しむサークルです。定期的に部内で行なっているコンサートではエレクトーンを何人かで演奏するアンサンブルのグループ、通称"アンサ"を組み、楽しく演奏しています。</p>
            <p>入部はいつでもだれでも大歓迎です。音楽経験のある人もない人も、私たちと楽しい学生生活を送りませんか？</p>
          </div>
        </MotionSection>

        <MotionSection delay={0.3}>
          <div className={`${styles.seasonBlock} ${styles.left}`}>
            <div className={styles.activity}>
              <div className={styles.seasonCircle}>春</div>
              <div className={styles.activityContent}>
                <h3 className={styles.activityTitle}>新歓イベント</h3>
                <p>新入生との交流を大切にしています。楽譜ツアーなど、楽しいイベントが盛りだくさんです。</p>
                <div className={styles.activityImage}>
                  <Image src="/images/image.jpg" alt="春の活動" width={400} height={300} className={styles.image} />
                </div>
              </div>
            </div>
          </div>
        </MotionSection>
        <MotionSection delay={0.4}>
          <div className={`${styles.seasonBlock} ${styles.right}`}>
            <div className={styles.activity}>
              <div className={styles.seasonCircle}>夏</div>
              <div className={styles.activityContent}>
                <h3 className={styles.activityTitle}>夏のイベント</h3>
                <p>七夕コンサート、夏合宿、学園祭準備など、充実した活動を行っています。</p>
                <div className={styles.activityImage}>
                  <Image src="/images/image.jpg" alt="夏の活動" width={400} height={300} className={styles.image} />
                </div>
              </div>
            </div>
          </div>
        </MotionSection>
        <MotionSection delay={0.5}>
          <div className={`${styles.seasonBlock} ${styles.left}`}>
            <div className={styles.activity}>
              <div className={styles.seasonCircle}>秋</div>
              <div className={styles.activityContent}>
                <h3 className={styles.activityTitle}>秋のコンサート</h3>
                <p>学園祭コンサート、クリスマスコンサートなど、大きなイベントが目白押しです。</p>
                <div className={styles.activityImage}>
                  <Image src="/images/image.jpg" alt="秋の活動" width={400} height={300} className={styles.image} />
                </div>
              </div>
            </div>
          </div>
        </MotionSection>
        <MotionSection delay={0.6}>
          <div className={`${styles.seasonBlock} ${styles.right}`}>
            <div className={styles.activity}>
              <div className={styles.seasonCircle}>冬</div>
              <div className={styles.activityContent}>
                <h3 className={styles.activityTitle}>冬のイベント</h3>
                <p>冬合宿、ジョイントコンサート、追い出しコンサートなど、楽しいイベントが盛りだくさんです。</p>
                <div className={styles.activityImage}>
                  <Image src="/images/image.jpg" alt="冬の活動" width={400} height={300} className={styles.image} />
                </div>
              </div>
            </div>
          </div>
        </MotionSection>

        <MotionSection delay={0.8}>
          <h2 className={styles.sectionTitle}>お知らせ</h2>
          <div className={styles.news}>
            <div className={styles.newsItem}>
              <span className={styles.newsDate}>2024.03.15</span>
              <p>新入生歓迎会を開催します！</p>
            </div>
            <div className={styles.newsItem}>
              <span className={styles.newsDate}>2024.03.10</span>
              <p>春合宿の日程が決定しました</p>
            </div>
            <div className={styles.newsItem}>
              <span className={styles.newsDate}>2024.03.01</span>
              <p>新年度の活動計画を更新しました</p>
            </div>
          </div>
        </MotionSection>

        <MotionSection delay={0.9}>
          <h2 className={styles.sectionTitle}>SNS</h2>
          <div className={styles.socialFeed}>
            <div className={styles.socialCard}>
              <h3 className={styles.socialTitle}>Twitter</h3>
              <div className={styles.socialIcon}>
                <a href="https://twitter.com/tuatelectoneweb" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/twitter.svg"
                    alt="Twitter"
                    width={48}
                    height={48}
                    className={styles.icon}
                  />
                </a>
              </div>
            </div>
            <div className={styles.socialCard}>
              <h3 className={styles.socialTitle}>Instagram</h3>
              <div className={styles.socialIcon}>
                <a href="https://www.instagram.com/electone_ompoo/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/instagram.svg"
                    alt="Instagram"
                    width={48}
                    height={48}
                    className={styles.icon}
                  />
                </a>
              </div>
            </div>
          </div>
        </MotionSection>
      </div>
    </div>
  );
}

"use client";
import { useEffect } from "react";

/**
 * ドット半径(%)のみをランダムに変更するアニメータ
 */
export default function PolkaDotSizeAnimator({
  min = 10,       // 半径の最小値 (%)
  max = 40,       // 半径の最大値 (%)
  minDelay = 500, // 変化間隔の最小 (ms)
  maxDelay = 2500 // 変化間隔の最大 (ms)
}) {
  useEffect(() => {
    let timer;

    const animate = () => {
      // 1) 新しい半径を決定
      const radius = Math.floor(min + Math.random() * (max - min));
      document.documentElement.style.setProperty("--dot-radius", `${radius}%`);

      // 2) 次回まで待つ
      const delay = Math.floor(minDelay + Math.random() * (maxDelay - minDelay));
      timer = setTimeout(animate, delay);
    };

    animate();                // 初回キック
    return () => clearTimeout(timer); // クリーンアップ
  }, [min, max, minDelay, maxDelay]);

  return null; // 描画なし。副作用のみ
}

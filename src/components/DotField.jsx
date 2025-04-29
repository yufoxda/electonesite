"use client";
import { useEffect, useState } from "react";

/**
 * 画面に小円をランダム散布し、activeRatio の個数をランダム間隔で
 * ♪ → 左右にスウィング → 円 へ戻す背景コンポーネント
 */
export default function DotField({
  count = 160,          // 散布する総数
  activeRatio = 0.10,   // アニメ対象の割合
  minRest = 4,          // 次アニメまで最短秒
  maxRest = 10          //                最長秒
}) {
  /* 1) 初回は空 → hydrate 後に乱数で座標を生成 */
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const activeCount = Math.floor(count * activeRatio);
    const arr = [];

    for (let i = 0; i < count; i++) {
      arr.push({
        id: i,
        isAnim: i < activeCount,        // 先頭 activeCount 個だけアニメ対象 (固定)
        left: Math.random() * 100,      // 0–100 %
        top:  Math.random() * 100
      });
    }
    setDots(arr);
  }, [count, activeRatio]);

  /* 2) .play を付け外ししてアニメを回す */
  useEffect(() => {
    if (dots.length === 0) return;

    const targets = document.querySelectorAll(".dot.anim");

    const schedule = (el) => {
      const rest = (minRest + Math.random() * (maxRest - minRest)) * 1000;
      setTimeout(() => {
        el.classList.add("play");

        const off = () => {
          el.classList.remove("play");
          el.removeEventListener("animationend", off, true);
          schedule(el);                 // 次回予約
        };
        el.addEventListener("animationend", off, true);
      }, rest);
    };

    targets.forEach(schedule);
  }, [dots, minRest, maxRest]);

  /* 3) 描画 */
  return (
    <div className="dot-field">
      {dots.map(({ id, isAnim, left, top }) => (
        <span
          key={id}
          className={`dot${isAnim ? " anim" : ""}`}
          style={{ left: `${left}%`, top: `${top}%` }}
        >
          <span className="circle" />
          <span className="note">&#9834;</span>
        </span>
      ))}
    </div>
  );
}

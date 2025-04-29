"use client";
import { useEffect, useState } from "react";

/**
 * ビューポートをタイル格子で埋め、activeRatio のセルだけ
 * ランダムなタイミングで ♪→左右スウィング→● に戻す。
 */
export default function DotGrid({
  activeRatio = 0.10,    // アニメ対象割合
  minRest = 3,           // 待機秒最小
  maxRest = 8            // 待機秒最大
}) {
  const [cells, setCells] = useState([]);   // 格子配列

  /* ① 画面サイズに合わせて格子を作り直す ------------------ */
  useEffect(() => {
    const makeGrid = () => {
      const tile = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--tile"),10);
      const cols = Math.ceil(window.innerWidth  / tile) + 1;   // 少し余分に
      const rows = Math.ceil(window.innerHeight / tile) + 1;
      const total = cols * rows;
      const activeMax = Math.floor(total * activeRatio);

      const arr = Array.from({ length: total }, (_, i) => ({
        id: i,
        anim: i < activeMax       // 上から activeMax 個だけアニメ対象 (固定)
      }));
      setCells(arr);
    };

    makeGrid();                          // 初回
    window.addEventListener("resize", makeGrid);
    return () => window.removeEventListener("resize", makeGrid);
  }, [activeRatio]);

  /* ② .play をランダム付与 ------------------------------- */
  useEffect(() => {
    if (!cells.length) return;
    const targets = document.querySelectorAll(".cell.anim");

    const schedule = (el) => {
      const rest = (minRest + Math.random() * (maxRest - minRest)) * 1000;
      setTimeout(() => {
        el.classList.add("play");
        const end = () => {
          el.classList.remove("play");
          el.removeEventListener("animationend", end, true);
          schedule(el);
        };
        el.addEventListener("animationend", end, true);
      }, rest);
    };
    targets.forEach(schedule);
  }, [cells, minRest, maxRest]);

  /* ③ 描画 (位置決めは CSS Grid が担当) */
  return (
    <div className="dot-grid">
      {cells.map(({ id, anim }) => (
        <span key={id} className={`cell${anim ? " anim" : ""}`}>
          <span className="circle" />
          <span className="note">&#9834;</span>
        </span>
      ))}
    </div>
  );
}

"use client";
import { useEffect, useState } from 'react';
import type { JSX } from 'react';
import Image from 'next/image';

const NOTE_COUNT = 28;
const NOTE_IMGS = ['/images/note.svg', '/images/note2.svg', '/images/note3.svg'];

function getRandom(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function NoteBackground() {
  const [notes, setNotes] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: NOTE_COUNT }).map((_, i) => {
      const left = getRandom(0, 100);
      const size = getRandom(24, 60);
      const rotate = getRandom(-30, 30);
      const opacity = getRandom(0.08, 0.18);
      const swayDuration = getRandom(2.0, 3.0);
      const swayDelay = getRandom(0, 2);
      const floatDuration = getRandom(2.5, 4.0);
      const floatDelay = getRandom(0, 2);
      const noteImg = NOTE_IMGS[Math.floor(Math.random() * NOTE_IMGS.length)];
      // 左右対称な放物線分布で高さを決定
      const minBottom = 2;   // 中央の最低高さ
      const maxBottom = 38;  // 端の最大高さ
      const t = Math.pow((left - 50) / 50, 2); // 0（中央）〜1（端）で左右対称
      const endBottom = minBottom + (maxBottom - minBottom) * t;
      // アニメーションの開始位置（画面下-10%〜2%）
      const startBottom = getRandom(-10, 2);
      const floatUpDuration = getRandom(7, 14); // 上昇アニメーションの長さ
      // 中央40〜60vwは控えめに（opacityを0.7倍に緩和）
      const isCenter = left > 40 && left < 60;
      const finalOpacity = isCenter ? opacity * 0.7 : opacity;
      return (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${left}vw`,
            width: size,
            height: size,
            opacity: finalOpacity,
            transform: `rotate(${rotate}deg)`,
            transition: 'opacity 0.3s',
            animation:
              `note-sway ${swayDuration}s ease-in-out ${swayDelay}s infinite alternate, ` +
              `note-float ${floatDuration}s ease-in-out ${floatDelay}s infinite alternate, ` +
              `note-floatup-${i} ${floatUpDuration}s linear 0s infinite`,
          }}
        >
          <style>{`
            @keyframes note-floatup-${i} {
              0% { bottom: ${startBottom}vh; }
              100% { bottom: ${endBottom}vh; }
            }
          `}</style>
          <Image src={noteImg} alt="note" width={size} height={size} draggable={false} style={{position:'absolute', bottom:0}} />
        </div>
      );
    });
    setNotes(generated);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {notes}
      <style jsx global>{`
        @keyframes note-sway {
          0% { transform: rotate(-10deg) }
          50% { transform: rotate(10deg) }
          100% { transform: rotate(-10deg) }
        }
        @keyframes note-float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
} 
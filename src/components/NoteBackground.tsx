"use client";
import { useEffect, useState } from 'react';
import type { JSX } from 'react';
import Image from 'next/image';

const NOTE_COUNT = 35;
const NOTE_IMGS = ['/images/note.svg', '/images/note2.svg', '/images/note3.svg'];

function getRandom(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

// 音符の動きのパターンを定義
const animationPatterns = [
  'sway-float',    // 左右に揺れながら上下に浮かぶ
  'rotate-float',  // 回転しながら浮かぶ
  'zigzag-float',  // ジグザグに動きながら浮かぶ
  'wave-float'     // 波のように動きながら浮かぶ
];

export default function NoteBackground() {
  const [notes, setNotes] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: NOTE_COUNT }).map((_, i) => {
      const left = getRandom(0, 100);
      const size = getRandom(24, 60);
      const rotate = getRandom(-30, 30);
      const opacity = getRandom(0.08, 0.18);
      const pattern = animationPatterns[Math.floor(Math.random() * animationPatterns.length)];
      
      // アニメーションの基本パラメータ
      const duration = getRandom(2.5, 4.0);
      const delay = getRandom(0, 2);
      const floatUpDuration = getRandom(7, 14);
      
      // 音符の高さを決定
      const minBottom = 2;
      const maxBottom = 38;
      const t = Math.pow((left - 50) / 50, 2);
      const endBottom = minBottom + (maxBottom - minBottom) * t;
      const startBottom = getRandom(-10, 2);
      
      // 中央部分の透明度調整
      const isCenter = left > 40 && left < 60;
      const finalOpacity = isCenter ? opacity * 0.7 : opacity;

      // アニメーションの定義
      const getAnimation = () => {
        switch (pattern) {
          case 'sway-float':
            return `note-sway ${duration}s ease-in-out ${delay}s infinite alternate, note-float ${duration}s ease-in-out ${delay}s infinite alternate`;
          case 'rotate-float':
            return `note-rotate ${duration}s ease-in-out ${delay}s infinite alternate, note-float ${duration}s ease-in-out ${delay}s infinite alternate`;
          case 'zigzag-float':
            return `note-zigzag ${duration}s ease-in-out ${delay}s infinite alternate, note-float ${duration}s ease-in-out ${delay}s infinite alternate`;
          case 'wave-float':
            return `note-wave ${duration}s ease-in-out ${delay}s infinite alternate, note-float ${duration}s ease-in-out ${delay}s infinite alternate`;
          default:
            return `note-sway ${duration}s ease-in-out ${delay}s infinite alternate, note-float ${duration}s ease-in-out ${delay}s infinite alternate`;
        }
      };

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
            animation: `${getAnimation()}, note-floatup-${i} ${floatUpDuration}s linear 0s infinite`,
          }}
        >
          <style>{`
            @keyframes note-floatup-${i} {
              0% { bottom: ${startBottom}vh; }
              100% { bottom: ${endBottom}vh; }
            }
          `}</style>
          <Image 
            src={NOTE_IMGS[Math.floor(Math.random() * NOTE_IMGS.length)]} 
            alt="note" 
            width={size} 
            height={size} 
            draggable={false} 
            style={{position:'absolute', bottom:0}} 
          />
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
          0% { transform: rotate(-10deg) translateX(-5px); }
          50% { transform: rotate(10deg) translateX(5px); }
          100% { transform: rotate(-10deg) translateX(-5px); }
        }
        @keyframes note-rotate {
          0% { transform: rotate(-180deg); }
          50% { transform: rotate(180deg); }
          100% { transform: rotate(-180deg); }
        }
        @keyframes note-zigzag {
          0% { transform: translateX(-10px) translateY(0); }
          25% { transform: translateX(10px) translateY(-5px); }
          50% { transform: translateX(-10px) translateY(0); }
          75% { transform: translateX(10px) translateY(5px); }
          100% { transform: translateX(-10px) translateY(0); }
        }
        @keyframes note-wave {
          0% { transform: translateX(-5px) translateY(0); }
          25% { transform: translateX(5px) translateY(-5px); }
          50% { transform: translateX(-5px) translateY(0); }
          75% { transform: translateX(5px) translateY(5px); }
          100% { transform: translateX(-5px) translateY(0); }
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
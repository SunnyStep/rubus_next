import { NextPage } from "next";
import styles from "./Decorations.module.scss";
import { CSSProperties, useEffect } from "react";
import { useState } from "react";
import berry_1 from "./assets/berry_1.png";
import berry_2 from "./assets/berry_2.png";
import leave_1 from "./assets/leave_1.png";
import leave_2 from "./assets/leave_2.png";
import leave_3 from "./assets/leave_3.png";
import leave_4 from "./assets/leave_4.png";
import leave_5 from "./assets/leave_5.png";

type DecorationsProps = {
  offset?: number;
};

const generateTop = (windowHeight: number, numPoints: number) => {
  const tops = Array.from({ length: numPoints }, (_, index) =>
    Math.floor((windowHeight / numPoints) * index + 10)
  );
  return tops;
};

// Функция для получения случайного значения размытия (blur)
const getRandomBlur = () => `${Math.floor(Math.random() * 6)}px`;

// Функция для получения случайного значения масштаба (scale) от 0.7 до 1
const getRandomScale = () => Math.random() * 0.3 + 0.7;

// Функция для получения случайного значения вращения (rotation) от -45 до 45 градусов
const getRandomRotation = () => `${Math.floor(Math.random() * 91) - 45}deg`;

const getRandomBerrySrc = () => {
  const srcIndex = Math.random() < 0.5 ? 0 : 1;
  return srcIndex === 0 ? berry_1.src : berry_2.src;
};

const getRandomLeaves = () => {
  const leaves = [
    leave_1.src,
    leave_2.src,
    leave_3.src,
    leave_4.src,
    leave_5.src,
    leave_1.src,
    leave_2.src,
    leave_3.src,
    leave_4.src,
    leave_5.src,
    leave_1.src,
    leave_2.src,
    leave_3.src,
    leave_4.src,
    leave_5.src,
  ];

  return shuffleArray(leaves);
};

const generateOffsets = (decoWidth: number, numPoints: number) => {
  const MIN_OFFSET = 50; // Минимальное значение для offsets
  const MAX_OFFSET = decoWidth - 90; // Максимальное значение для offsets

  const baseOffset = (MAX_OFFSET - MIN_OFFSET) / (numPoints - 1);
  const offsets = Array.from(
    { length: numPoints },
    (_, index) => Math.floor(baseOffset * index) + MIN_OFFSET
  );

  return offsets;
};

const shuffleArray = (array: any[]) => {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const DecorationsPage: NextPage<DecorationsProps> = ({ offset }) => {
  const Decoration = (side: string) => {
    const decoWidth = 250;
    const lr: CSSProperties = side === "left" ? { left: 0 } : { right: 0 };
    const offsetSide = () => (side === "left" ? "left" : "right"); // <-- Используем "left" или "right" в зависимости от стороны
    const offsets = shuffleArray(generateOffsets(decoWidth, 18));

    const berryTops = generateTop(12500, 18);
    const leaveTops = generateTop(12500, 18);
    const leaves = getRandomLeaves();

    return (
      <span className={styles.deco} style={{ ...lr, [offsetSide()]: 0 }}>
        {berryTops.map((item, index) => {
          const blurValue = getRandomBlur();
          const scaleValue = getRandomScale();
          const rotationValue = getRandomRotation();
          const src = getRandomBerrySrc();

          const style = {
            top: item,
            [offsetSide()]: offsets[index], // <-- Используем "left" или "right" в зависимости от стороны
            filter: `blur(${blurValue})`,
            transform: `scale(${scaleValue}) rotate(${rotationValue})`,
          };

          return (
            <img key={index} src={src} className={styles.berry} style={style} />
          );
        })}

        {leaveTops.map((item, index) => {
          const flip = offsetSide() == "right" ? "scaleX(-1)" : "scaleX(1)";

          const style = {
            top: item,
            [offsetSide()]: -30,
            transform: flip,
          };

          return (
            <img
              key={index}
              src={leaves[index]}
              className={styles.leave}
              style={style}
            />
          );
        })}
      </span>
    );
  };

  return (
    <>
      {Decoration("left")}
      {Decoration("right")}
    </>
  );
};

export default DecorationsPage;

"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import classNames from "classnames";
import { useRef } from "react";

const animationClass = "gradient";
const duration = 6;

export default function BackgroundTexture() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const boxNodes =
        ref.current?.querySelectorAll(`.${animationClass}`) ?? [];
      const boxArray = [...boxNodes].reverse().slice(0, -1);

      gsap.to(boxArray, {
        opacity: 0,
        duration,
        repeat: -1,
        yoyo: true,
        repeatDelay: duration,
      });
    },
    { scope: ref },
  );

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div ref={ref}>
        {Array.from({ length: 5 }).map((_, index) => {
          const gradient = `sun-${index + 1}`;
          return (
            <div
              key={index}
              className={classNames(
                "absolute inset-0",
                gradient,
                animationClass,
              )}
            />
          );
        })}
      </div>
    </div>
  );
}

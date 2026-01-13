'use client';

import { useGSAP } from '@gsap/react';
import classNames from 'classnames';
import { gsap } from 'gsap';
import { useRef } from 'react';

const animationClass = 'gradient';
const duration = 10;

export default function BackgroundTexture() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const boxNodes =
        ref.current?.querySelectorAll('.' + animationClass) ?? [];
      const boxes = [...boxNodes]; // Convert from node-list to array

      if (boxes.length === 0) return;

      gsap.set(boxes.slice(1), { opacity: 0 });

      const tl = gsap.timeline({ repeat: -1 });

      boxes.forEach((box, index) => {
        const nextIndex = (index + 1) % boxes.length;
        tl.to(box, { opacity: 0, duration }).to(
          boxes[nextIndex],
          { opacity: 1, duration },
          '<'
        );
      });
    },
    { scope: ref }
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
                'absolute inset-0',
                gradient,
                animationClass
              )}
            />
          );
        })}
      </div>
    </div>
  );
}

"use client";
import { title, subtitle } from "../primitives";
import { HeartBoldIcon } from "../icons";
import { useRef } from "react";

export default function Welcome() {
  const buttonRef = useRef<SVGSVGElement | null>(null);
  const handleConfetti = async () => {
    const { clientWidth, clientHeight } = document.documentElement;
    const boundingBox = buttonRef.current?.getBoundingClientRect?.();

    const targetY = boundingBox?.y ?? 0;
    const targetX = boundingBox?.x ?? 0;
    const targetWidth = boundingBox?.width ?? 0;

    const targetCenterX = targetX + targetWidth / 2;
    const confetti = (await import("canvas-confetti")).default;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 70,
      //   origin: {
      //     y: targetY / clientHeight,
      //     x: targetCenterX / clientWidth,
      //   },
      origin: {
        y: 0.5,
        x: 0.5,
      },
    });
  };
  return (
    <div className="h-full flex justify-center items-center">
      <div className="leading-8 text-center md:leading-10 animate-fadeInY">
        <div className="inline-block">
          <h1 className={title()}>welcome to my personal&nbsp;</h1>
          <span className={title({ color: "violet" })}>website</span>
        </div>
        <div className="mt-10">
          <HeartBoldIcon
            className="text-pink-500 animate-heartbeat inline-block cursor-pointer"
            size={50}
            style={{
              animationDuration: "2.5s",
            }}
            onClick={handleConfetti}
          />
        </div>
        {/* <h2
          className={subtitle({
            fullWidth: true,
            class: "text-center lg:pr-8 flex items-center justify-center",
          })}
        >
          <span className={title()}>from</span>
          <span className={title({ color: "blue" })}>
            &nbsp;&lt;developer/&gt;
          </span>
          <span className={title()}>'s&nbsp;</span>
          <HeartBoldIcon
            ref={buttonRef}
            className="text-pink-500 animate-heartbeat inline-block cursor-pointer"
            size={50}
            style={{
              animationDuration: "2.5s",
            }}
            onClick={handleConfetti}
          />
        </h2> */}
      </div>
    </div>
  );
}

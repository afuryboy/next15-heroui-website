"use client";

import { Button, Chip } from "@heroui/react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { sectionWrapper, title, titleWrapper, subtitle } from "../primitives";

import Marquee from "../marketing/marquee";

import { useIsMobile } from "@/hooks/use-media-query";
import * as motion from "motion/react-client";
export default function HomeAboutMe() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isMobile = useIsMobile();
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  let imgSrc: string;

  if (isDarkMode) {
    imgSrc = isMobile
      ? "/images/herouipro-section-background@mobile.webp"
      : "/images/herouipro-section-background.webp";
  } else {
    imgSrc = isMobile
      ? "/images/herouipro-section-background-light@mobile.webp"
      : "/images/herouipro-section-background-light.webp";
  }

  const mobileClassName: string = isDarkMode
    ? "h-full w-full bg-[radial-gradient(at_40%_80%,_rgba(255,255,255,_0)_5%,_rgba(0,0,0,_0.8)_50%,_rgba(0,0,0,1)_100%)]"
    : "h-full w-full bg-[radial-gradient(at_40%_80%,_rgba(0,0,0,_0)_5%,_rgba(255,255,255,_0.8)_50%,_rgba(255,255,255,1)_100%)]";

  const webClassName: string = isDarkMode
    ? "h-full w-full bg-[radial-gradient(at_80%_50%,_rgba(255,255,255,_0)_20%,_rgba(0,0,0,_0.8)_40%,_rgba(0,0,0,1)_100%)]"
    : "h-full w-full bg-[radial-gradient(at_80%_50%,_rgba(0,0,0,_0)_20%,_rgba(255,255,255,_0.9)_40%,_rgba(255,255,255,1)_100%)]";

  if (!mounted) return null;

  const CheckmarkIcon = () => (
    <svg
      fill="none"
      height="11"
      viewBox="0 0 13 11"
      width="13"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 6.4L4.14286 10L12 1"
        stroke="#006FEE"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );

  return (
    <section
      className={sectionWrapper({ class: "mt-16 lg:mt-44 overflow-hidden" })}
    >
      <motion.div className="text-center" initial={{ x: 200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}>
        <h1 className="mb-2 font-bold text-4xl">关于我</h1>
      </motion.div>
      <motion.div className="flex flex-col gap-8" initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}>
        <div className="z-30 flex h-full flex-col items-start justify-center leading-8 pt-4">
          <Chip
            classNames={{
              base: "ml-0.5 transition-colors bg-gradient-to-br from-cyan-600 to-blue-600",
              content: "text-tiny font-semibold",
            }}
            color="primary"
            size="sm"
          >
            技能
          </Chip>
          <div className={titleWrapper({ class: "mt-2 inline md:block" })}>
            <h1
              className={title({
                size: "lg",
                class: "[text-shadow:_0_3px_0_rgb(0_0_0_/_10%)]",
              })}
            >
              我&nbsp;
            </h1>
            <h1
              className={title({
                size: "lg",
                color: "blue",
                class: "[text-shadow:_0_3px_0_rgb(0_0_0_/_10%)]",
              })}
            >
              擅长&nbsp;
            </h1>
            <h1
              className={title({
                size: "lg",
                class: "[text-shadow:_0_3px_0_rgb(0_0_0_/_10%)]",
              })}
            >
              的技术&nbsp;
            </h1>
            {/* <div className="flex flex-col sm:flex-row">
              <h1 className={title({size: "lg", class: "[text-shadow:_0_3px_0_rgb(0_0_0_/_10%)]"})}>
                前端&nbsp;
              </h1>
              <h1 className={title({size: "lg", class: "[text-shadow:_0_3px_0_rgb(0_0_0_/_10%)]"})}>
                或者全栈
              </h1>
            </div> */}
          </div>
          <p className={subtitle({ class: "pr-12 text-foreground-500" })}>
            2015年开始从事前端开发工作至今
          </p>
          <div className="w-full grid gap-4 grid-cols-responsive-max-4">
            <div className="mt-4 text-foreground-600 font-medium">
              <div className="flex gap-x-4 items-center">
                <CheckmarkIcon />
                javascript
              </div>
              <div className="flex gap-x-4 items-center">
                <CheckmarkIcon />
                css3
              </div>
              <div className="flex gap-x-4 items-center">
                <CheckmarkIcon />
                html5
              </div>
              <div className="flex gap-x-4 items-center">
                <CheckmarkIcon />
                nodejs
              </div>
            </div>
            <div className="mt-4 text-foreground-600 font-medium">
              <div className="flex gap-x-4 items-center">
                <CheckmarkIcon />
                vue3
              </div>
              <div className="flex gap-x-4 items-center">
                <CheckmarkIcon />
                vue2
              </div>
              <div className="flex gap-x-4 items-center">
                <CheckmarkIcon />
                react
              </div>
              <div className="flex gap-x-4 items-center">
                <CheckmarkIcon />
                next
              </div>
            </div>
            <div className="mt-4 text-foreground-600 font-medium">
              <div className="flex gap-x-4 items-center">
                <CheckmarkIcon />
                vuex
              </div>
              <div className="flex gap-x-4 items-center">
                <CheckmarkIcon />
                pina
              </div>
              <div className="flex gap-x-4 items-center">
                <CheckmarkIcon />
                zustand
              </div>
              <div className="flex gap-x-4 items-center">
                <CheckmarkIcon />
                mobx
              </div>
            </div>
            <div className="mt-4 text-foreground-600 font-medium">
              <div className="flex gap-x-4 items-center">
                <CheckmarkIcon />
                element
              </div>
              <div className="flex gap-x-4 items-center">
                <CheckmarkIcon />
                element-plus
              </div>
              <div className="flex gap-x-4 items-center">
                <CheckmarkIcon />
                RuoYi
              </div>
              <div className="flex gap-x-4 items-center">
                <CheckmarkIcon />
                HeroUI
              </div>
            </div>
          </div>
          {/* <div className="mt-4 text-foreground-600 font-medium">
            <div className="flex gap-x-4 items-center">
              <CheckmarkIcon />
              javascript
            </div>
            <div className="flex gap-x-4 items-center">
              <CheckmarkIcon />
              css3
            </div>
            <div className="flex gap-x-4 items-center">
              <CheckmarkIcon />
              html5
            </div>
            <div className="flex gap-x-4 items-center">
              <CheckmarkIcon />
              nodejs
            </div>
          </div> */}
          <div className="w-full flex justify-center">
            <div className="mt-4">
              <Button
                as={"a"}
                className="px-6 flex items-center"
                color="primary"
                href="/about"
              >
                了解我
                <svg
                  fill="none"
                  height="21"
                  viewBox="0 0 20 21"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0254 5.44189L17.0837 10.5002L12.0254 15.5586"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M2.91602 10.5H16.941"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="1.5"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
        {/* <div className="overflow-hidden">
          <Marquee
            vertical
            className="h-78 hidden md:flex w-screen mt-4 md:absolute md:top-0 md:inset-0 isolate md:max-h-dvh"
            duration={isMobile ? 240 : 60}
          >
            <img
              alt="Hero Background"
              className="w-full"
              height={3255}
              loading="lazy"
              src={imgSrc}
              width={1920}
            />
          </Marquee>
          <div className="absolute md:hidden inset-0 pointer-events-none top-0 z-20">
            <div className={mobileClassName} />
          </div>

          <div className="absolute hidden md:block md:inset-0 md:pointer-events-none md:top-0 md:z-20">
            <div className={webClassName} />
          </div>
        </div> */}
      </motion.div>
    </section>
  );
}

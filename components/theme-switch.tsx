"use client";

import { FC, ChangeEvent } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { SwitchProps, useSwitch } from "@heroui/react";
import { useTheme } from "next-themes";
import { clsx } from "@heroui/shared-utils";
import { useIsSSR } from "@react-aria/ssr";
import { usePostHog } from "posthog-js/react";

import { SunLinearIcon, MoonIcon } from "@/components/icons";

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
  classNames,
}) => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();
  const posthog = usePostHog();

  const initialTheme = isSSR ? "light" : theme;

  const setThemeAnimate = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    posthog.capture("ThemeChange", {
      action: "click",
      category: "theme",
      data: newTheme,
    });
  };
  const handleThemeChange = (
    e?: ChangeEvent<HTMLInputElement> | React.MouseEvent | React.KeyboardEvent
  ) => {
    e?.preventDefault();
    e?.stopPropagation();

    let event = e.nativeEvent;
    const x = event.clientX;
    const y = event.clientY;
    // 计算鼠标点击位置距离视窗的最大圆半径
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    );
    document.documentElement.style.setProperty("--x", x + "px");
    document.documentElement.style.setProperty("--y", y + "px");
    document.documentElement.style.setProperty("--r", endRadius + "px");
    // 判断浏览器是否支持document.startViewTransition
    console.log(document.startViewTransition);

    if (document.startViewTransition) {
      // 如果支持就使用document.startViewTransition方法
      document.startViewTransition(() => {
        setThemeAnimate.call(); // 这里的函数是切换主题的函数，调用changeBtn函数时进行传入
      });
    } else {
      // 如果不支持，就使用最原始的方式，切换主题
      setThemeAnimate.call();
    }
  };

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    isSelected: initialTheme === "light",
    "aria-label": `Switch to ${
      initialTheme === "light" ? "dark" : "light"
    } mode`,
    onChange: handleThemeChange as (
      event: ChangeEvent<HTMLInputElement>
    ) => void,
  });

  return (
    <Component
      {...getBaseProps({
        className: clsx(
          "p-1 w-8 h-8 transition-opacity hover:opacity-80 cursor-pointer",
          className,
          classNames?.base
        ),
        onClick: handleThemeChange,
        onKeyDown: (e: React.KeyboardEvent) => {
          if (e.key === "Enter" || e.key === " ") {
            handleThemeChange(e);
          }
        },
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: clsx(
            [
              "w-auto h-auto",
              "bg-transparent",
              "rounded-lg",
              "flex items-center justify-center",
              "group-data-[selected=true]:bg-transparent",
              "!text-default-600 dark:!text-default-300",
              "pt-0",
              "px-0",
              "mx-0",
            ],
            classNames?.wrapper
          ),
        })}
      >
        {!isSelected || isSSR ? (
          <SunLinearIcon size={22} />
        ) : (
          <MoonIcon size={22} />
        )}
      </div>
    </Component>
  );
};

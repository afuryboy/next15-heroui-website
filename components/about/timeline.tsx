import { Image } from "@heroui/react";

export default function AboutTimeLine() {
  return (
    <div className="relative flex w-[250px] max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border border-gray-100 dark:border-customDark bg-white dark:bg-customDark md:shadow-md h-[250px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <circle
          className="stroke-black/10 stroke-1 dark:stroke-white/10"
          cx="50%"
          cy="50%"
          r="50"
          fill="none"
          strokeDasharray="4 4"
        ></circle>
      </svg>
        <Image width={24} height={24} src="/about/html-1.svg" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <circle
          className="stroke-black/10 stroke-1 "
          cx="50%"
          cy="50%"
          r="50"
          fill="none"
          strokeDasharray="4 4"
        ></circle>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <circle
          className="stroke-black/10 stroke-1 dark:stroke-white/10"
          cx="50%"
          cy="50%"
          r="50"
          fill="none"
          strokeDasharray="4 4"
        ></circle>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <circle
          className="stroke-black/10 stroke-1 dark:stroke-white/10"
          cx="50%"
          cy="50%"
          r="100"
          fill="none"
          strokeDasharray="4 4"
        ></circle>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <circle
          className="stroke-black/10 stroke-1 dark:stroke-white/10"
          cx="50%"
          cy="50%"
          r="100"
          fill="none"
          strokeDasharray="4 4"
        ></circle>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <circle
          className="stroke-black/10 stroke-1 dark:stroke-white/10"
          cx="50%"
          cy="50%"
          r="100"
          fill="none"
          strokeDasharray="4 4"
        ></circle>
      </svg>
    </div>
  );
}

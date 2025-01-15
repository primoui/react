"use client"

import type { HTMLAttributes } from "react"
import type { VariantProps } from "~/shared/cva"
import { cx } from "~/shared/cva"
import { progressRingVariants } from "./ProgressRing.variants"

export type ProgressRingProps = Omit<HTMLAttributes<HTMLDivElement>, "size"> &
  VariantProps<typeof progressRingVariants> & {
    /**
     * The percentage of progress to display.
     */
    percent?: number
    /**
     * The theme color of the progress ring.
     */
    theme?: "blue" | "green" | "red" | "yellow"
  }

const cleanPercentage = (percent = 0) => {
  const isNegative = percent < 0
  const isTooHigh = percent > 100
  return isNegative ? 0 : isTooHigh ? 100 : percent
}

export const ProgressRing = ({
  className,
  percent = 0,
  size = "md",
  theme = "blue",
  ...rest
}: ProgressRingProps) => {
  const percentage = cleanPercentage(percent)
  const radius = 42
  const circumference = Math.PI * radius * 2
  const strokeDashoffset = ((100 - percentage) * circumference) / 100

  return (
    <div className={cx(progressRingVariants({ size, className }))} {...rest}>
      <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>Progress Ring - {percentage}% Complete</title>
        <circle
          className={cx("stroke-current opacity-10", theme && `text-${theme}-500`)}
          r={radius}
          cx="50"
          cy="50"
          strokeWidth="8"
          fill="transparent"
        />
        <circle
          className={cx("stroke-current", theme && `text-${theme}-500`)}
          r={radius}
          cx="50"
          cy="50"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="transparent"
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-medium">{percentage}%</span>
      </div>
    </div>
  )
}

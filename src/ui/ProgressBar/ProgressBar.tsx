"use client"

import { Slot } from "@radix-ui/react-slot"
import type { ComponentProps, HTMLAttributes } from "react"
import type { VariantProps } from "~/shared/cva"
import { cx } from "~/shared/cva"
import { cleanPercentage, isReactElement } from "~/shared/helpers"
import { Paragraph } from "../../typography/Paragraph"
import {
  progressBarHintVariants,
  progressBarLabelVariants,
  progressBarLineVariants,
  progressBarProgressVariants,
  progressBarVariants,
} from "./ProgressBar.variants"

export type ProgressBarRootProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof progressBarVariants>

export type ProgressBarProps = ProgressBarRootProps &
  ProgressBarBarProps & {
    /**
     * The label of the progress bar.
     */
    label?: string

    /**
     * The small label to show at the end of the progress bar.
     */
    hint?: string
  }

export type ProgressBarBarProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof progressBarLineVariants> &
  VariantProps<typeof progressBarProgressVariants> & {
    /**
     * The percentage of the progress bar.
     */
    percent: number
  }

export const ProgressBarRoot = ({ className, ...rest }: ProgressBarRootProps) => {
  return <div className={progressBarVariants({ className })} {...rest} />
}

export const ProgressBarBar = ({ className, percent, theme, ...rest }: ProgressBarBarProps) => {
  const percentage = cleanPercentage(percent)

  return (
    <div className={progressBarLineVariants({ className })} {...rest}>
      <div
        className={cx(progressBarProgressVariants({ theme }))}
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}

export const ProgressBarLabel = ({
  className,
  size = "sm",
  variant = "medium",
  ...rest
}: ComponentProps<typeof Paragraph>) => {
  return (
    <Paragraph
      size={size}
      variant={variant}
      className={cx(progressBarLabelVariants({ className }))}
      {...rest}
    />
  )
}

export const ProgressBarHint = ({
  className,
  size = "xs",
  ...rest
}: ComponentProps<typeof Paragraph>) => {
  return <Paragraph size={size} className={cx(progressBarHintVariants({ className }))} {...rest} />
}

export const ProgressBarBase = ({
  children,
  percent = 0,
  label = "",
  hint = "",
  theme = "blue",
  ...rest
}: ProgressBarProps) => {
  const Component = isReactElement(children) ? Slot : "div"

  return (
    <ProgressBarRoot {...rest}>
      {label && <ProgressBarLabel>{label}</ProgressBarLabel>}
      <ProgressBarBar percent={percent} theme={theme} />
      {hint && <ProgressBarHint>{hint}</ProgressBarHint>}

      {children && <Component className="order-last w-full">{children}</Component>}
    </ProgressBarRoot>
  )
}

export const ProgressBar = Object.assign(ProgressBarBase, {
  Root: ProgressBarRoot,
  Bar: ProgressBarBar,
  Label: ProgressBarLabel,
  Hint: ProgressBarHint,
})

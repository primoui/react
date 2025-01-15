"use client"

import type { HTMLAttributes } from "react"

import type { VariantProps } from "../../shared"
import { cx } from "../../shared"

import { statusVariants } from "./Status.variants"

export type StatusProps = HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof statusVariants> & {
    /**
     * The label to display in the status.
     */
    label?: string
  }

export const Status = ({
  children,
  className,
  label,
  theme = "gray",
  variant = "empty",
  ...rest
}: StatusProps) => {
  return (
    <span className={cx(statusVariants({ theme, variant, className }))} {...rest}>
      {children ?? label}
    </span>
  )
}

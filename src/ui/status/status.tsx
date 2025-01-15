"use client"

import type { HTMLAttributes } from "react"
import type { VariantProps } from "~/shared/cva"
import { cx } from "~/shared/cva"
import { statusVariants } from "./status.variants"

export type StatusProps = HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof statusVariants> & {
    /**
     * The label to display in the status.
     */
    label?: string
  }

const Status = ({
  children,
  className,
  label,
  theme = "gray",
  variant = "empty",
  ...props
}: StatusProps) => {
  return (
    <span className={cx(statusVariants({ theme, variant, className }))} {...props}>
      {children ?? label}
    </span>
  )
}

export { Status }

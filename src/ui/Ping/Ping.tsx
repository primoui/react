"use client"

import type { HTMLAttributes } from "react"
import type { VariantProps } from "~/shared/cva"
import { cx } from "~/shared/cva"
import { pingDotOutlineVariants, pingDotVariants, pingVariants } from "./Ping.variants"

export type PingProps = Omit<HTMLAttributes<HTMLDivElement>, "size"> &
  VariantProps<typeof pingVariants>

export const Ping = ({ className, theme = "gray", ...props }: PingProps) => {
  return (
    <div className={cx(pingVariants({ theme, className }))} {...props}>
      <div className={cx(pingDotOutlineVariants({ className: "animate-ping" }))} />
      <div className={cx(pingDotOutlineVariants({ className: "animate-pulse" }))} />
      <div className={cx(pingDotVariants())} />
    </div>
  )
}

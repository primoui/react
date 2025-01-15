"use client"

import type { HTMLAttributes } from "react"

import type { VariantProps } from "../../shared"
import { cx } from "../../shared"

import { backdropVariants } from "./Backdrop.variants"

export type BackdropProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof backdropVariants>

export const Backdrop = ({ className, ...props }: BackdropProps) => {
  return <div className={cx(backdropVariants({ className }))} {...props} />
}

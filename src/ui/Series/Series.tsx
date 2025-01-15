"use client"

import type { HTMLAttributes } from "react"

import type { VariantProps } from "../../shared"
import { cx } from "../../shared"

import { seriesVariants } from "./Series.variants"

export type SeriesProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof seriesVariants>

export const Series = ({ children, className, ...rest }: SeriesProps) => {
  return (
    <div className={cx(seriesVariants({ className }))} {...rest}>
      {children}
    </div>
  )
}

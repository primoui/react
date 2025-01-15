import type { HTMLAttributes } from "react"

import { cx } from "~/shared/cva"
import { shimmerVariants } from "./Shimmer.variants"

export type ShimmerProps = HTMLAttributes<HTMLDivElement>

const Shimmer = ({ className, ...props }: ShimmerProps) => {
  return <div className={cx(shimmerVariants({ className }))} {...props} />
}

export { Shimmer }

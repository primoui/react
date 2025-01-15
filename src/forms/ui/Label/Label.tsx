"use client"

import * as LabelPrimitive from "@radix-ui/react-label"
import type { ComponentProps } from "react"
import { type VariantProps, cx } from "~/shared/cva"
import { labelVariants } from "./Label.variants"

export type LabelProps = ComponentProps<typeof LabelPrimitive.Root> &
  VariantProps<typeof labelVariants>

const Label = ({ className, isRequired, ...props }: LabelProps) => {
  return <LabelPrimitive.Root className={cx(labelVariants({ isRequired, className }))} {...props} />
}

export { Label }

"use client"

import type { FieldsetHTMLAttributes } from "react"
import type { VariantProps } from "~/shared/cva"
import { cx } from "~/shared/cva"
import { fieldsetVariants } from "./Fieldset.variants"

export type FieldsetProps = FieldsetHTMLAttributes<HTMLFieldSetElement> &
  VariantProps<typeof fieldsetVariants>

const Fieldset = ({ className, layout = "adaptive", columns = 1, ...props }: FieldsetProps) => {
  return <fieldset className={cx(fieldsetVariants({ layout, columns, className }))} {...props} />
}

export { Fieldset }

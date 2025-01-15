"use client"

import * as LabelPrimitive from "@radix-ui/react-label"
import type { ComponentProps } from "react"

import type { VariantProps } from "../../../shared"
import { cx } from "../../../shared"

import { labelVariants } from "./Label.variants"

export type LabelProps = ComponentProps<typeof LabelPrimitive.Root> &
  VariantProps<typeof labelVariants>

export const Label = (props: LabelProps) => {
  const { className, isRequired, ...rest } = props

  return <LabelPrimitive.Root className={cx(labelVariants({ isRequired, className }))} {...rest} />
}

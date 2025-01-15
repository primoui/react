"use client"

import type { HTMLAttributes } from "react"

import type { VariantProps } from "../../shared"
import { cx } from "../../shared"

import { stackVariants } from "./Stack.variants"

export type StackProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof stackVariants>

export const Stack = ({ className, ...rest }: StackProps) => {
  return <div className={cx(stackVariants({ className }))} {...rest} />
}

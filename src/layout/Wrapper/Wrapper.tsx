"use client"

import type { HTMLAttributes } from "react"

import { type VariantProps, cx } from "~/shared/cva"

import { wrapperContentVariants, wrapperVariants } from "./Wrapper.variants"

export type WrapperProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof wrapperVariants>

export const WrapperBase = ({ className, ...props }: WrapperProps) => {
  return <div className={cx(wrapperVariants({ className }))} {...props} />
}

export const WrapperContent = ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
  return <main className={cx(wrapperContentVariants({ className }))} {...props} />
}

export const Wrapper = Object.assign(WrapperBase, {
  Content: WrapperContent,
})

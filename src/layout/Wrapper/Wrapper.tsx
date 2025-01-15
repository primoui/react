"use client"

import type { HTMLAttributes } from "react"

import { type VariantProps, cx } from "~/shared/cva"

import { wrapperContentVariants, wrapperVariants } from "./Wrapper.variants"

export type WrapperProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof wrapperVariants>

export const WrapperBase = ({ className, ...rest }: WrapperProps) => {
  return <div className={cx(wrapperVariants({ className }))} {...rest} />
}

export const WrapperContent = ({ className, ...rest }: HTMLAttributes<HTMLElement>) => {
  return <main className={cx(wrapperContentVariants({ className }))} {...rest} />
}

export const Wrapper = Object.assign(WrapperBase, {
  Content: WrapperContent,
})

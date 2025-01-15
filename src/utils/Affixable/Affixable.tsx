"use client"

import { Slot } from "@radix-ui/react-slot"
import type { HTMLAttributes } from "react"

import type { cva } from "../../shared"
import { cx, isReactElement } from "../../shared"

export type AffixableProps = HTMLAttributes<HTMLElement> & {
  variants: ReturnType<typeof cva>
}

export const Affixable = ({ variants, ...rest }: AffixableProps) => {
  const Component = isReactElement(rest.children) ? Slot : "span"

  if (!rest.children) {
    return null
  }

  return <Component className={cx(variants({}))} {...rest} />
}

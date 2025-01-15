"use client"

import { Slot } from "@radix-ui/react-slot"
import type { HTMLAttributes } from "react"
import type { cva } from "~/shared/cva"
import { cx } from "~/shared/cva"
import { isReactElement } from "~/shared/helpers"

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

"use client"

import { Slot } from "@radix-ui/react-slot"
import type { HTMLAttributes } from "react"
import type { cva } from "~/shared/cva"
import { cx } from "~/shared/cva"
import { isReactElement } from "~/shared/helpers"

export type AffixableProps = HTMLAttributes<HTMLElement> & {
  variants: ReturnType<typeof cva>
}

const Affixable = ({ variants, ...props }: AffixableProps) => {
  const Component = isReactElement(props.children) ? Slot : "span"

  if (!props.children) {
    return null
  }

  return <Component className={cx(variants({}))} {...props} />
}

export { Affixable }

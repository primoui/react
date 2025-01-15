"use client"

import { Slot } from "@radix-ui/react-slot"
import type { HTMLAttributes } from "react"
import type { VariantProps } from "~/shared/cva"
import { cx } from "~/shared/cva"
import { isReactElement } from "~/shared/helpers"
import { dotVariants } from "./Dot.variants"

export type DotProps = Omit<HTMLAttributes<HTMLSpanElement>, "size"> &
  VariantProps<typeof dotVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

export const Dot = ({ className, asChild = false, variant = "solid", ...rest }: DotProps) => {
  const useAsChild = asChild && isReactElement(rest.children)
  const Component = useAsChild ? Slot : "span"

  return <Component className={cx(dotVariants({ variant, className }))} {...rest} />
}

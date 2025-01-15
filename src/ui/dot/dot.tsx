"use client"

import { Slot } from "@radix-ui/react-slot"
import type { HTMLAttributes } from "react"
import type { VariantProps } from "~/shared/cva"
import { cx } from "~/shared/cva"
import { isReactElement } from "~/shared/helpers"
import { dotVariants } from "./dot.variants"

export type DotProps = Omit<HTMLAttributes<HTMLSpanElement>, "size"> &
  VariantProps<typeof dotVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

const Dot = ({ className, asChild = false, variant = "solid", ...props }: DotProps) => {
  const useAsChild = asChild && isReactElement(props.children)
  const Component = useAsChild ? Slot : "span"

  return <Component className={cx(dotVariants({ variant, className }))} {...props} />
}

export { Dot }

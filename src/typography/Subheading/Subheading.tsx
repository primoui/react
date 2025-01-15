"use client"

import { Slot } from "@radix-ui/react-slot"
import type { HTMLAttributes } from "react"
import { type VariantProps, cx } from "~/shared/cva"
import { isReactElement } from "~/shared/helpers"
import { subheadingVariants } from "./Subheading.variants"

export type SubheadingProps = Omit<HTMLAttributes<HTMLParagraphElement>, "size"> &
  VariantProps<typeof subheadingVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

export const Subheading = ({
  className,
  asChild = false,
  size = "md",
  ...rest
}: SubheadingProps) => {
  const useAsChild = asChild && isReactElement(rest.children)
  const Comp = useAsChild ? Slot : "p"

  return <Comp className={cx(subheadingVariants({ size, className }))} {...rest} />
}

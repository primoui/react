"use client"

import { Slot } from "@radix-ui/react-slot"
import type { HTMLAttributes } from "react"
import { forwardRef } from "react"

import { type VariantProps, cx, isReactElement } from "../../shared"

import { subheadingVariants } from "./Subheading.variants"

export type SubheadingElement = HTMLParagraphElement

export type SubheadingProps = Omit<HTMLAttributes<SubheadingElement>, "size"> &
  VariantProps<typeof subheadingVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

export const Subheading = forwardRef<SubheadingElement, SubheadingProps>(
  ({ className, asChild = false, size = "md", ...rest }, ref) => {
    const useAsChild = asChild && isReactElement(rest.children)
    const Comp = useAsChild ? Slot : "p"

    return <Comp ref={ref} className={cx(subheadingVariants({ size, className }))} {...rest} />
  },
)

Subheading.displayName = "Subheading"

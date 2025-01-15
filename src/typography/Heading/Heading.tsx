"use client"

import { Slot } from "@radix-ui/react-slot"
import type { ElementType, HTMLAttributes } from "react"

import { type VariantProps, cx, isReactElement } from "../../shared"

import { headingVariants } from "./Heading.variants"

export type HeadingProps = Omit<HTMLAttributes<HTMLHeadingElement>, "size"> &
  VariantProps<typeof headingVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    as?: ElementType

    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

export const Heading = ({ className, as, asChild = false, size = "h3", ...rest }: HeadingProps) => {
  const useAsChild = asChild && isReactElement(rest.children)
  const Comp = useAsChild ? Slot : (as ?? size ?? "h2")

  return <Comp className={cx(headingVariants({ size, className }))} {...rest} />
}

export const H1 = (props: HeadingProps) => {
  return <Heading size="h1" {...props} />
}

export const H2 = (props: HeadingProps) => {
  return <Heading size="h2" {...props} />
}

export const H3 = (props: HeadingProps) => {
  return <Heading size="h3" {...props} />
}

export const H4 = (props: HeadingProps) => {
  return <Heading size="h4" {...props} />
}

export const H5 = (props: HeadingProps) => {
  return <Heading size="h5" {...props} />
}

export const H6 = (props: HeadingProps) => {
  return <Heading size="h6" {...props} />
}

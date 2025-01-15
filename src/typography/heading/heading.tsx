"use client"

import { Slot } from "@radix-ui/react-slot"
import type { ElementType, HTMLAttributes } from "react"
import { type VariantProps, cx } from "~/shared/cva"
import { isReactElement } from "~/shared/helpers"
import { headingVariants } from "./heading.variants"

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

const Heading = ({ className, as, asChild = false, size = "h3", ...props }: HeadingProps) => {
  const useAsChild = asChild && isReactElement(props.children)
  const Comp = useAsChild ? Slot : (as ?? size ?? "h2")

  return <Comp className={cx(headingVariants({ size, className }))} {...props} />
}

const H1 = (props: HeadingProps) => {
  return <Heading size="h1" {...props} />
}

const H2 = (props: HeadingProps) => {
  return <Heading size="h2" {...props} />
}

const H3 = (props: HeadingProps) => {
  return <Heading size="h3" {...props} />
}

const H4 = (props: HeadingProps) => {
  return <Heading size="h4" {...props} />
}

const H5 = (props: HeadingProps) => {
  return <Heading size="h5" {...props} />
}

const H6 = (props: HeadingProps) => {
  return <Heading size="h6" {...props} />
}

export { Heading, H1, H2, H3, H4, H5, H6 }

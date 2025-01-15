"use client"

import { Slot } from "@radix-ui/react-slot"
import type { HTMLAttributes } from "react"
import { type VariantProps, cx } from "~/shared/cva"
import { isReactElement } from "~/shared/helpers"
import { paragraphVariants } from "./Paragraph.variants"

export type ParagraphProps = Omit<HTMLAttributes<HTMLParagraphElement>, "size"> &
  VariantProps<typeof paragraphVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

const Paragraph = ({
  className,
  asChild,
  size = "md",
  variant = "regular",
  wrap = "wrap",
  ...props
}: ParagraphProps) => {
  const useAsChild = asChild && isReactElement(props.children)
  const Comp = useAsChild ? Slot : "p"

  return <Comp className={cx(paragraphVariants({ size, variant, wrap, className }))} {...props} />
}

export { Paragraph }

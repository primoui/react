"use client"

import { Slot } from "@radix-ui/react-slot"
import type { HTMLAttributes } from "react"
import { type VariantProps, cx } from "~/shared/cva"
import { isReactElement } from "~/shared/helpers"
import { sectionVariants } from "./Section.variants"

export type SectionProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof sectionVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

export const Section = ({ className, asChild = false, ...props }: SectionProps) => {
  const useAsChild = asChild && isReactElement(props.children)
  const Component = useAsChild ? Slot : "section"

  return <Component className={cx(sectionVariants({ className }))} {...props} />
}

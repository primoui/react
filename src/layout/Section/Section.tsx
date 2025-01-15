"use client"

import { Slot } from "@radix-ui/react-slot"
import { forwardRef } from "react"
import type { HTMLAttributes } from "react"

import { type VariantProps, cx, isReactElement } from "../../shared"

import { sectionVariants } from "./Section.variants"

export type SectionElement = HTMLElement

export type SectionProps = HTMLAttributes<SectionElement> &
  VariantProps<typeof sectionVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

export const Section = forwardRef<SectionElement, SectionProps>(
  ({ className, asChild = false, ...rest }, ref) => {
    const useAsChild = asChild && isReactElement(rest.children)
    const Component = useAsChild ? Slot : "section"

    return <Component ref={ref} className={cx(sectionVariants({ className }))} {...rest} />
  },
)

Section.displayName = "Section"

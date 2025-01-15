"use client"

import { Slot } from "@radix-ui/react-slot"
import type { HTMLAttributes } from "react"
import { forwardRef } from "react"

import { type VariantProps, cx, isReactElement } from "../../shared"

import { containerVariants } from "./Container.variants"

export type ContainerElement = HTMLDivElement

export type ContainerProps = HTMLAttributes<ContainerElement> &
  VariantProps<typeof containerVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

export const Container = forwardRef<ContainerElement, ContainerProps>(
  ({ className, asChild = false, size = "md", ...rest }, ref) => {
    const useAsChild = asChild && isReactElement(rest.children)
    const Component = useAsChild ? Slot : "main"

    return <Component ref={ref} className={cx(containerVariants({ size, className }))} {...rest} />
  },
)

Container.displayName = "Container"

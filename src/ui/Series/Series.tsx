"use client"

import { Slot } from "@radix-ui/react-slot"
import type { HTMLAttributes } from "react"
import { forwardRef } from "react"

import { type VariantProps, cx, isReactElement } from "../../shared"

import { seriesVariants } from "./Series.variants"

export type SeriesElement = HTMLDivElement

export type SeriesProps = HTMLAttributes<SeriesElement> &
  VariantProps<typeof seriesVariants> & {
    /**
     * If series to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

export const Series = forwardRef<SeriesElement, SeriesProps>((props, ref) => {
  const { className, asChild, size = "md", direction = "row", ...rest } = props
  const useAsChild = asChild && isReactElement(props.children)
  const Component = useAsChild ? Slot : "div"

  return (
    <Component ref={ref} className={cx(seriesVariants({ size, direction, className }))} {...rest} />
  )
})

Series.displayName = "Series"

"use client"

import { GripVertical } from "lucide-react"
import { type SVGAttributes, forwardRef } from "react"
import { type VariantProps, cx } from "../../shared"
import { draggableVariants } from "./Draggable.variants"

export type DraggableElement = SVGSVGElement

export type DraggableProps = SVGAttributes<DraggableElement> &
  VariantProps<typeof draggableVariants>

export const Draggable = forwardRef<DraggableElement, DraggableProps>((props, ref) => {
  const { className, dragging, ...rest } = props

  return (
    <GripVertical ref={ref} className={cx(draggableVariants({ dragging, className }))} {...rest} />
  )
})

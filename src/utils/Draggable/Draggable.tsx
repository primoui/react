"use client"

import { GripVertical } from "lucide-react"
import type { SVGAttributes } from "react"
import { type VariantProps, cx } from "~/shared/cva"
import { draggableVariants } from "./Draggable.variants"

export type DraggableProps = SVGAttributes<SVGSVGElement> & VariantProps<typeof draggableVariants>

export const Draggable = ({ className, dragging, ...rest }: DraggableProps) => {
  return <GripVertical className={cx(draggableVariants({ dragging, className }))} {...rest} />
}

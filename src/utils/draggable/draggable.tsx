"use client"

import { GripVertical } from "lucide-react"
import type { SVGAttributes } from "react"
import { type VariantProps, cx } from "~/shared/cva"
import { draggableVariants } from "./draggable.variants"

export type DraggableProps = SVGAttributes<SVGSVGElement> & VariantProps<typeof draggableVariants>

const Draggable = ({ className, dragging, ...props }: DraggableProps) => {
  return <GripVertical className={cx(draggableVariants({ dragging, className }))} {...props} />
}

export { Draggable }

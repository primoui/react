"use client"

import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import type { ComponentProps, ReactNode } from "react"
import type { VariantProps } from "~/shared/cva"
import { cx } from "~/shared/cva"
import { tooltipArrowVariants, tooltipVariants } from "./Tooltip.variants"

export type TooltipProps = ComponentProps<typeof TooltipPrimitive.Root> &
  ComponentProps<typeof TooltipContent> & {
    tooltip: ReactNode
  }

const TooltipProvider = TooltipPrimitive.Provider
const TooltipRoot = TooltipPrimitive.Root
const TooltipTrigger = TooltipPrimitive.Trigger
const TooltipPortal = TooltipPrimitive.Portal

const TooltipContent = ({
  children,
  className,
  align,
  ...props
}: ComponentProps<typeof TooltipPrimitive.Content> & VariantProps<typeof tooltipVariants>) => (
  <TooltipPrimitive.Content
    align={align}
    className={cx(tooltipVariants({ align, className }))}
    {...props}
  >
    {children}
    <TooltipArrow />
  </TooltipPrimitive.Content>
)

const TooltipArrow = ({
  className,
  ...props
}: ComponentProps<typeof TooltipPrimitive.Arrow> & VariantProps<typeof tooltipArrowVariants>) => (
  <TooltipPrimitive.Arrow className={cx(tooltipArrowVariants({ className }))} {...props} />
)

const TooltipBase = ({
  children,
  tooltip,
  align = "center",
  delayDuration = 0,
  collisionPadding = 5,
  sideOffset = 4,
  ...props
}: TooltipProps) => {
  if (!tooltip) {
    return children
  }

  return (
    <TooltipPrimitive.Provider disableHoverableContent>
      <TooltipPrimitive.Root delayDuration={delayDuration}>
        <TooltipPrimitive.Trigger className={props.className} asChild>
          {children}
        </TooltipPrimitive.Trigger>

        <TooltipPrimitive.Portal>
          <TooltipContent
            align={align}
            collisionPadding={collisionPadding}
            sideOffset={sideOffset}
            {...props}
          >
            <p>{tooltip}</p>
          </TooltipContent>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

const Tooltip = Object.assign(TooltipBase, {
  Provider: TooltipProvider,
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
  Portal: TooltipPortal,
  Content: TooltipContent,
  Arrow: TooltipArrow,
})

export {
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
  TooltipPortal,
  TooltipContent,
  TooltipArrow,
  TooltipBase,
  Tooltip,
}

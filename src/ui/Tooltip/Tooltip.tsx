"use client"

import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import type { ComponentProps, ReactNode } from "react"

import type { VariantProps } from "../../shared"
import { cx } from "../../shared"

import { tooltipArrowVariants, tooltipVariants } from "./Tooltip.variants"

export type TooltipProps = ComponentProps<typeof TooltipPrimitive.Root> &
  ComponentProps<typeof TooltipContent> & {
    tooltip: ReactNode
  }

export const TooltipProvider = TooltipPrimitive.Provider
export const TooltipRoot = TooltipPrimitive.Root
export const TooltipTrigger = TooltipPrimitive.Trigger
export const TooltipPortal = TooltipPrimitive.Portal

export const TooltipContent = ({
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

export const TooltipArrow = ({
  className,
  ...props
}: ComponentProps<typeof TooltipPrimitive.Arrow> & VariantProps<typeof tooltipArrowVariants>) => (
  <TooltipPrimitive.Arrow className={cx(tooltipArrowVariants({ className }))} {...props} />
)

export const TooltipBase = ({
  children,
  tooltip,
  align = "center",
  delayDuration = 0,
  collisionPadding = 5,
  sideOffset = 4,
  ...rest
}: TooltipProps) => {
  if (!tooltip) {
    return children
  }

  return (
    <TooltipPrimitive.Provider disableHoverableContent>
      <TooltipPrimitive.Root delayDuration={delayDuration}>
        <TooltipPrimitive.Trigger className={rest.className} asChild>
          {children}
        </TooltipPrimitive.Trigger>

        <TooltipPrimitive.Portal>
          <TooltipContent
            align={align}
            collisionPadding={collisionPadding}
            sideOffset={sideOffset}
            {...rest}
          >
            <p>{tooltip}</p>
          </TooltipContent>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

export const Tooltip = Object.assign(TooltipBase, {
  Provider: TooltipProvider,
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
  Portal: TooltipPortal,
  Content: TooltipContent,
  Arrow: TooltipArrow,
})

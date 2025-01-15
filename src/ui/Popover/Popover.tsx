"use client"

import * as PopoverPrimitive from "@radix-ui/react-popover"
import { X } from "lucide-react"
import type { ComponentProps, ReactNode } from "react"
import type { VariantProps } from "~/shared/cva"
import { cx } from "~/shared/cva"
import { popoverArrowVariants, popoverCloseVariants, popoverVariants } from "./Popover.variants"

export type PopoverProps = Omit<ComponentProps<typeof PopoverContent>, "popover"> & {
  popover: ReactNode
}

const PopoverRoot = PopoverPrimitive.Root
const PopoverTrigger = PopoverPrimitive.Trigger
const PopoverPortal = PopoverPrimitive.Portal
const PopoverAnchor = PopoverPrimitive.Anchor

const PopoverContent = ({
  children,
  className,
  ...props
}: ComponentProps<typeof PopoverPrimitive.Content> & VariantProps<typeof popoverVariants>) => (
  <PopoverPrimitive.Content className={cx(popoverVariants({ className }))} {...props}>
    {children}
    <PopoverArrow />
  </PopoverPrimitive.Content>
)

const PopoverArrow = ({
  className,
  ...props
}: ComponentProps<typeof PopoverPrimitive.Arrow> & VariantProps<typeof popoverArrowVariants>) => (
  <PopoverPrimitive.Arrow className={cx(popoverArrowVariants({ className }))} {...props} />
)

const PopoverClose = ({
  className,
  ...props
}: ComponentProps<typeof PopoverPrimitive.Close> & VariantProps<typeof popoverCloseVariants>) => (
  <PopoverPrimitive.Close className={cx(popoverCloseVariants({ className }))} {...props}>
    <X />
  </PopoverPrimitive.Close>
)

const PopoverBase = ({
  children,
  popover,
  align = "center",
  side = "bottom",
  collisionPadding = 5,
  sideOffset = 4,
  ...props
}: PopoverProps) => {
  if (!popover) {
    return children
  }

  return (
    <PopoverPrimitive.Root>
      <PopoverPrimitive.Trigger asChild>{children}</PopoverPrimitive.Trigger>

      <PopoverPrimitive.Portal>
        <PopoverContent
          align={align}
          side={side}
          collisionPadding={collisionPadding}
          sideOffset={sideOffset}
          {...props}
        >
          {popover}
        </PopoverContent>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  )
}

const Popover = Object.assign(PopoverBase, {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Portal: PopoverPortal,
  Anchor: PopoverAnchor,
  Content: PopoverContent,
  Arrow: PopoverArrow,
  Close: PopoverClose,
})

export {
  PopoverRoot,
  PopoverTrigger,
  PopoverPortal,
  PopoverAnchor,
  PopoverContent,
  PopoverArrow,
  PopoverClose,
  PopoverBase,
  Popover,
}

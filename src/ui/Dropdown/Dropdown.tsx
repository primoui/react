"use client"

import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu"
import type { ComponentProps } from "react"
import type { VariantProps } from "~/shared/cva"
import { cx } from "~/shared/cva"
import {
  dropdownGroupVariants,
  dropdownLabelVariants,
  dropdownSeparatorVariants,
} from "./Dropdown.variants"

export type DropdownProps = ComponentProps<typeof DropdownPrimitive.Root>

export const DropdownRoot = DropdownPrimitive.Root
export const DropdownTrigger = DropdownPrimitive.Trigger
export const DropdownPortal = DropdownPrimitive.Portal
export const DropdownContent = DropdownPrimitive.Content
export const DropdownSub = DropdownPrimitive.Sub
export const DropdownSubTrigger = DropdownPrimitive.SubTrigger
export const DropdownSubContent = DropdownPrimitive.SubContent

export const DropdownGroup = ({
  className,
  ...props
}: ComponentProps<typeof DropdownPrimitive.Group> & VariantProps<typeof dropdownGroupVariants>) => (
  <DropdownPrimitive.Group className={cx(dropdownGroupVariants({ className }))} {...props} />
)

export const DropdownItem = ({ ...props }: ComponentProps<typeof DropdownPrimitive.Item>) => (
  <DropdownPrimitive.Item asChild {...props} />
)

export const DropdownLabel = ({
  className,
  ...props
}: ComponentProps<typeof DropdownPrimitive.Label> & VariantProps<typeof dropdownLabelVariants>) => (
  <DropdownPrimitive.Label className={cx(dropdownLabelVariants({ className }))} {...props} />
)

export const DropdownSeparator = ({
  className,
  ...props
}: ComponentProps<typeof DropdownPrimitive.Separator> &
  VariantProps<typeof dropdownSeparatorVariants>) => (
  <DropdownPrimitive.Separator
    className={cx(dropdownSeparatorVariants({ className }))}
    {...props}
  />
)

export const Dropdown = Object.assign(DropdownRoot, {
  Trigger: DropdownTrigger,
  Portal: DropdownPortal,
  Content: DropdownContent,
  Sub: DropdownSub,
  SubTrigger: DropdownSubTrigger,
  SubContent: DropdownSubContent,
  Group: DropdownGroup,
  Item: DropdownItem,
  Label: DropdownLabel,
  Separator: DropdownSeparator,
})

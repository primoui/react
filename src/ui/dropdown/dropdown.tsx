"use client"

import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu"
import type { ComponentProps } from "react"
import type { VariantProps } from "~/shared/cva"
import { cx } from "~/shared/cva"
import {
  dropdownGroupVariants,
  dropdownLabelVariants,
  dropdownSeparatorVariants,
} from "./dropdown.variants"

export type DropdownProps = ComponentProps<typeof DropdownPrimitive.Root>

const DropdownRoot = DropdownPrimitive.Root
const DropdownTrigger = DropdownPrimitive.Trigger
const DropdownPortal = DropdownPrimitive.Portal
const DropdownContent = DropdownPrimitive.Content
const DropdownSub = DropdownPrimitive.Sub
const DropdownSubTrigger = DropdownPrimitive.SubTrigger
const DropdownSubContent = DropdownPrimitive.SubContent

const DropdownGroup = ({
  className,
  ...props
}: ComponentProps<typeof DropdownPrimitive.Group> & VariantProps<typeof dropdownGroupVariants>) => (
  <DropdownPrimitive.Group className={cx(dropdownGroupVariants({ className }))} {...props} />
)

const DropdownItem = ({ ...props }: ComponentProps<typeof DropdownPrimitive.Item>) => (
  <DropdownPrimitive.Item asChild {...props} />
)

const DropdownLabel = ({
  className,
  ...props
}: ComponentProps<typeof DropdownPrimitive.Label> & VariantProps<typeof dropdownLabelVariants>) => (
  <DropdownPrimitive.Label className={cx(dropdownLabelVariants({ className }))} {...props} />
)

const DropdownSeparator = ({
  className,
  ...props
}: ComponentProps<typeof DropdownPrimitive.Separator> &
  VariantProps<typeof dropdownSeparatorVariants>) => (
  <DropdownPrimitive.Separator
    className={cx(dropdownSeparatorVariants({ className }))}
    {...props}
  />
)

const Dropdown = Object.assign(DropdownRoot, {
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

export {
  DropdownRoot,
  DropdownTrigger,
  DropdownPortal,
  DropdownContent,
  DropdownSub,
  DropdownSubTrigger,
  DropdownSubContent,
  DropdownGroup,
  DropdownItem,
  DropdownLabel,
  DropdownSeparator,
  Dropdown,
}

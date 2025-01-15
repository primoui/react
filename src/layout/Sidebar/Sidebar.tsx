"use client"

import type { HTMLAttributes } from "react"
import { type VariantProps, cx } from "~/shared/cva"
import type { SubheadingProps } from "../../typography/Subheading"
import { Subheading } from "../../typography/Subheading"
import {
  sidebarContentVariants,
  sidebarHeadingVariants,
  sidebarMenuVariants,
  sidebarSeparatorVariants,
  sidebarVariants,
} from "./Sidebar.variants"

export type SidebarProps = HTMLAttributes<HTMLElement> & VariantProps<typeof sidebarVariants>

const SidebarBase = ({ className, size = "md", sticky = true, ...props }: SidebarProps) => {
  return <aside className={cx(sidebarVariants({ size, sticky, className }))} {...props} />
}

const SidebarContent = ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
  return <nav className={cx(sidebarContentVariants({ className }))} {...props} />
}

const SidebarMenu = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cx(sidebarMenuVariants({ className }))} {...props} />
}

const SidebarHeading = ({ className, size = "xs", ...props }: SubheadingProps) => {
  return <Subheading size={size} className={cx(sidebarHeadingVariants({ className }))} {...props} />
}

const SidebarSeparator = ({
  className,
  fullWidth,
  ...props
}: HTMLAttributes<HTMLHRElement> & VariantProps<typeof sidebarSeparatorVariants>) => {
  return <hr className={cx(sidebarSeparatorVariants({ fullWidth, className }))} {...props} />
}

const Sidebar = Object.assign(SidebarBase, {
  Content: SidebarContent,
  Menu: SidebarMenu,
  Heading: SidebarHeading,
  Separator: SidebarSeparator,
})

export { Sidebar, SidebarBase, SidebarContent, SidebarMenu, SidebarHeading, SidebarSeparator }

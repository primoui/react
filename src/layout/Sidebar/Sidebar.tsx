"use client"

import type { HTMLAttributes } from "react"

import { type VariantProps, cx } from "../../shared"
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

export const SidebarBase = ({ className, size = "md", sticky = true, ...rest }: SidebarProps) => {
  return <aside className={cx(sidebarVariants({ size, sticky, className }))} {...rest} />
}

export const SidebarContent = ({ className, ...rest }: HTMLAttributes<HTMLElement>) => {
  return <nav className={cx(sidebarContentVariants({ className }))} {...rest} />
}

export const SidebarMenu = ({ className, ...rest }: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cx(sidebarMenuVariants({ className }))} {...rest} />
}

export const SidebarHeading = ({ className, size = "xs", ...rest }: SubheadingProps) => {
  return <Subheading size={size} className={cx(sidebarHeadingVariants({ className }))} {...rest} />
}

export const SidebarSeparator = ({
  className,
  fullWidth,
  ...rest
}: HTMLAttributes<HTMLHRElement> & VariantProps<typeof sidebarSeparatorVariants>) => {
  return <hr className={cx(sidebarSeparatorVariants({ fullWidth, className }))} {...rest} />
}

export const Sidebar = Object.assign(SidebarBase, {
  Content: SidebarContent,
  Menu: SidebarMenu,
  Heading: SidebarHeading,
  Separator: SidebarSeparator,
})

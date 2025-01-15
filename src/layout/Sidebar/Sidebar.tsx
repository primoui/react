"use client"

import { forwardRef } from "react"
import type { HTMLAttributes } from "react"

import { type VariantProps, cx } from "../../shared"
import type { SubheadingElement, SubheadingProps } from "../../typography/Subheading"
import { Subheading } from "../../typography/Subheading"

import {
  sidebarContentVariants,
  sidebarHeadingVariants,
  sidebarMenuVariants,
  sidebarSeparatorVariants,
  sidebarVariants,
} from "./Sidebar.variants"

export type SidebarElement = HTMLElement

export type SidebarProps = HTMLAttributes<SidebarElement> & VariantProps<typeof sidebarVariants>

export const SidebarBase = forwardRef<SidebarElement, SidebarProps>(
  ({ className, size = "md", sticky = true, ...rest }, ref) => {
    return (
      <aside ref={ref} className={cx(sidebarVariants({ size, sticky, className }))} {...rest} />
    )
  },
)

export const SidebarContent = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>((props, ref) => {
  const { className, ...rest } = props

  return <nav ref={ref} className={cx(sidebarContentVariants({ className }))} {...rest} />
})

export const SidebarMenu = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const { className, ...rest } = props

    return <div ref={ref} className={cx(sidebarMenuVariants({ className }))} {...rest} />
  },
)

export const SidebarHeading = forwardRef<SubheadingElement, SubheadingProps>(
  ({ className, size = "xs", ...rest }, ref) => {
    return (
      <Subheading
        ref={ref}
        size={size}
        className={cx(sidebarHeadingVariants({ className }))}
        {...rest}
      />
    )
  },
)

export const SidebarSeparator = forwardRef<
  HTMLHRElement,
  HTMLAttributes<HTMLHRElement> & VariantProps<typeof sidebarSeparatorVariants>
>((props, ref) => {
  const { className, fullWidth, ...rest } = props

  return (
    <hr ref={ref} className={cx(sidebarSeparatorVariants({ fullWidth, className }))} {...rest} />
  )
})

export const Sidebar = Object.assign(SidebarBase, {
  Content: SidebarContent,
  Menu: SidebarMenu,
  Heading: SidebarHeading,
  Separator: SidebarSeparator,
})

Sidebar.displayName = "Sidebar"

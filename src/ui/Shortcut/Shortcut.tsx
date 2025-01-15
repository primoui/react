"use client"

import { Slot } from "@radix-ui/react-slot"
import type { ComponentProps } from "react"

import type { VariantProps } from "~/shared/cva"
import { cx } from "~/shared/cva"
import { Subheading } from "../../typography/Subheading"

import { shortcutVariants } from "./Shortcut.variants"

export type ShortcutProps = ComponentProps<typeof Subheading> &
  VariantProps<typeof shortcutVariants>

export const Shortcut = ({
  className,
  variant = "outline",
  size = "sm",
  ...rest
}: ShortcutProps) => {
  return (
    <Slot className={cx(shortcutVariants({ variant, className }))} {...rest}>
      <Subheading size={size} {...rest} />
    </Slot>
  )
}

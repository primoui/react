"use client"

import { Slot } from "@radix-ui/react-slot"
import type { ComponentProps } from "react"
import type { VariantProps } from "~/shared/cva"
import { cx } from "~/shared/cva"
import { Subheading } from "~/typography/subheading"
import { shortcutVariants } from "./shortcut.variants"

export type ShortcutProps = ComponentProps<typeof Subheading> &
  VariantProps<typeof shortcutVariants>

const Shortcut = ({ className, variant = "outline", size = "sm", ...props }: ShortcutProps) => {
  return (
    <Slot className={cx(shortcutVariants({ variant, className }))} {...props}>
      <Subheading size={size} {...props} />
    </Slot>
  )
}

export { Shortcut }

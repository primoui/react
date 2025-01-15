"use client"

import * as SwitchPrimitives from "@radix-ui/react-switch"
import type { ComponentProps } from "react"

import type { VariantProps } from "~/shared/cva"
import { cx } from "~/shared/cva"

import { switchThumbVariants, switchVariants } from "./Switch.variants"

export type SwitchProps = ComponentProps<typeof SwitchPrimitives.Root> &
  VariantProps<typeof switchVariants>

export const Switch = ({ className, error = false, disabled = false, ...rest }: SwitchProps) => {
  return (
    <SwitchPrimitives.Root className={cx(switchVariants({ error, className }))} {...rest}>
      <SwitchPrimitives.Thumb className={cx(switchThumbVariants())} />
    </SwitchPrimitives.Root>
  )
}

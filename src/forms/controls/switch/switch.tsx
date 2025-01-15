"use client"

import * as SwitchPrimitives from "@radix-ui/react-switch"
import type { ComponentProps } from "react"
import type { VariantProps } from "~/shared/cva"
import { cx } from "~/shared/cva"
import { switchThumbVariants, switchVariants } from "./switch.variants"

export type SwitchProps = ComponentProps<typeof SwitchPrimitives.Root> &
  VariantProps<typeof switchVariants>

const Switch = ({ className, error = false, disabled = false, ...props }: SwitchProps) => {
  return (
    <SwitchPrimitives.Root className={cx(switchVariants({ error, className }))} {...props}>
      <SwitchPrimitives.Thumb className={cx(switchThumbVariants())} />
    </SwitchPrimitives.Root>
  )
}

export { Switch }

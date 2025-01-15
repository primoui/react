"use client"

import * as SwitchPrimitives from "@radix-ui/react-switch"
import type { ComponentPropsWithoutRef, ElementRef } from "react"
import { forwardRef } from "react"

import type { VariantProps } from "../../../shared"
import { cx } from "../../../shared"

import { switchThumbVariants, switchVariants } from "./Switch.variants"

export type SwitchElement = ElementRef<typeof SwitchPrimitives.Root>
export type SwitchProps = ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> &
  VariantProps<typeof switchVariants>

// This component already uses ES6 default parameters, no changes needed
export const Switch = forwardRef<SwitchElement, SwitchProps>(
  ({ className, error = false, disabled = false, ...rest }, ref) => {
    return (
      <SwitchPrimitives.Root
        ref={ref}
        className={cx(switchVariants({ error, className }))}
        {...rest}
      >
        <SwitchPrimitives.Thumb className={cx(switchThumbVariants())} />
      </SwitchPrimitives.Root>
    )
  },
)

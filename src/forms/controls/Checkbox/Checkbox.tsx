"use client"

import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"
import type { ComponentProps } from "react"

import type { VariantProps } from "../../../shared"
import { cx } from "../../../shared"

import { checkboxVariants } from "./Checkbox.variants"

export type CheckboxProps = ComponentProps<typeof CheckboxPrimitive.Root> &
  VariantProps<typeof checkboxVariants>

export const Checkbox = ({
  className,
  error = false,
  disabled = false,
  ...rest
}: CheckboxProps) => {
  return (
    <CheckboxPrimitive.Root
      className={cx(checkboxVariants({ error, className }))}
      disabled={disabled}
      {...rest}
    >
      <CheckboxPrimitive.Indicator asChild>
        <Check className="size-3.5 !stroke-2" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

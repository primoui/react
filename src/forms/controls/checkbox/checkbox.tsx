"use client"

import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"
import type { ComponentProps } from "react"
import type { VariantProps } from "~/shared/cva"
import { cx } from "~/shared/cva"
import { checkboxVariants } from "./checkbox.variants"

export type CheckboxProps = ComponentProps<typeof CheckboxPrimitive.Root> &
  VariantProps<typeof checkboxVariants>

const Checkbox = ({ className, error = false, disabled = false, ...props }: CheckboxProps) => {
  return (
    <CheckboxPrimitive.Root
      className={cx(checkboxVariants({ error, className }))}
      disabled={disabled}
      {...props}
    >
      <CheckboxPrimitive.Indicator asChild>
        <Check className="size-3.5 !stroke-2" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }

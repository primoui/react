"use client"

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import type { ComponentProps } from "react"
import type { VariantProps } from "~/shared/cva"
import { cx } from "~/shared/cva"
import { Dot } from "~/ui/Dot"
import { radioGroupItemVariants } from "./RadioGroup.variants"

export type RadioGroupProps = ComponentProps<typeof RadioGroupPrimitive.Root>

const RadioGroupItem = ({
  error = false,
  children,
  className,
  ...props
}: ComponentProps<typeof RadioGroupPrimitive.Item> &
  VariantProps<typeof radioGroupItemVariants>) => {
  return (
    <RadioGroupPrimitive.Item
      className={cx(radioGroupItemVariants({ error, className }))}
      {...props}
    >
      <RadioGroupPrimitive.Indicator asChild>
        <Dot className="shadow" />
      </RadioGroupPrimitive.Indicator>

      {children}
    </RadioGroupPrimitive.Item>
  )
}

const RadioGroupRoot = ({ disabled = false, ...props }: RadioGroupProps) => (
  <RadioGroupPrimitive.Root disabled={disabled} {...props} />
)

const RadioGroup = Object.assign(RadioGroupRoot, {
  Item: RadioGroupItem,
})

export { RadioGroup, RadioGroupItem }

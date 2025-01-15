"use client"

import { isTruthy } from "@curiousleaf/utils"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"
import type { ComponentProps, ReactNode } from "react"
import { type VariantProps, cx } from "~/shared/cva"
import { inputVariants } from "../Input/Input.variants"
import {
  selectContentVariants,
  selectItemVariants,
  selectScrollVariants,
  selectViewportVariants,
} from "./Select.variants"

export const SelectRoot = SelectPrimitive.Root
export const SelectGroup = SelectPrimitive.Group
export const SelectValue = SelectPrimitive.Value
export const SelectIcon = SelectPrimitive.Icon

export const SelectTrigger = ({
  className,
  mono,
  error,
  children,
  ...props
}: ComponentProps<typeof SelectPrimitive.Trigger> & VariantProps<typeof inputVariants>) => (
  <SelectPrimitive.Trigger
    className={cx(inputVariants({ mono, error, hoverable: true, className }))}
    {...props}
  >
    <div className="grow truncate">{children}</div>

    <SelectPrimitive.Icon asChild>
      <ChevronDown className="shrink-0 opacity-70" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
)

export const SelectContent = ({
  className,
  children,
  position = "popper",
  ...props
}: ComponentProps<typeof SelectPrimitive.Content>) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      className={cx(selectContentVariants({ popper: position === "popper", className }))}
      position={position}
      {...props}
    >
      <SelectPrimitive.ScrollUpButton className={cx(selectScrollVariants({ position: "top" }))}>
        <ChevronUp className="opacity-70" />
      </SelectPrimitive.ScrollUpButton>

      <SelectPrimitive.Viewport
        className={cx(selectViewportVariants({ popper: position === "popper" }))}
      >
        <SelectPrimitive.Group>{children}</SelectPrimitive.Group>
      </SelectPrimitive.Viewport>

      <SelectPrimitive.ScrollDownButton
        className={cx(selectScrollVariants({ position: "bottom" }))}
      >
        <ChevronDown className="opacity-70" />
      </SelectPrimitive.ScrollDownButton>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
)

export const SelectLabel = ({
  className,
  ...props
}: ComponentProps<typeof SelectPrimitive.Label>) => (
  <SelectPrimitive.Label
    className={cx("py-1.5 pl-2 pr-8 text-xs font-medium lg:text-sm", className)}
    {...props}
  />
)

export const SelectItem = ({
  className,
  children,
  ...props
}: ComponentProps<typeof SelectPrimitive.Item>) => (
  <SelectPrimitive.Item className={cx(selectItemVariants({ className }))} {...props}>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>

    <SelectPrimitive.ItemIndicator asChild>
      <Check className="absolute right-1.5 top-1/2 -translate-y-1/2 stroke-2 text-sm opacity-70" />
    </SelectPrimitive.ItemIndicator>
  </SelectPrimitive.Item>
)

export const SelectSeparator = ({
  className,
  ...props
}: ComponentProps<typeof SelectPrimitive.Separator>) => (
  <SelectPrimitive.Separator className={cx("-mx-1 my-1 h-px bg-gray-200", className)} {...props} />
)

export type SelectProps = ComponentProps<typeof SelectPrimitive.Root> &
  ComponentProps<typeof SelectPrimitive.Value> &
  ComponentProps<typeof SelectTrigger> & {
    options?: (
      | false
      | {
          label?: ReactNode
          value: string
        }
    )[]
  }

export const Select = ({
  options,
  error,
  placeholder = "Select an option...",
  ...rest
}: SelectProps) => {
  return (
    <SelectPrimitive.Root {...rest}>
      <SelectTrigger error={error}>
        <SelectPrimitive.Value placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent>
        {options?.filter(isTruthy).map(({ label, value }, index) => (
          <SelectItem key={index} value={value}>
            {label ?? value}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectPrimitive.Root>
  )
}

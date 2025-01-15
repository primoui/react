"use client"

import type { VariantProps } from "~/shared/cva"
import { cx } from "~/shared/cva"
import type { ButtonProps } from "~/ui/Button/Button"
import { Button } from "~/ui/Button/Button"
import type { buttonVariants } from "~/ui/Button/Button.variants"

import { buttonGroupVariants } from "./ButtonGroup.variants"

export type ButtonGroupProps = ButtonProps &
  VariantProps<typeof buttonGroupVariants> &
  VariantProps<typeof buttonVariants> & {
    /**
     * The buttons to display in the group.
     */
    buttons?: ButtonProps[]
  }

export const ButtonGroup = ({
  children,
  className,
  buttons,
  theme = "secondary",
  variant = "outline",
  ...rest
}: ButtonGroupProps) => {
  return (
    <div className={cx(buttonGroupVariants({ className }))}>
      {buttons?.map((button, i) => (
        <Button key={`button-${i}`} theme={theme} variant={variant} {...button} {...rest} />
      ))}
      {children}
    </div>
  )
}

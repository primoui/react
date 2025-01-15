"use client"

import type { VariantProps } from "../../shared"
import { cx } from "../../shared"
import type { ButtonProps } from "../Button/Button"
import { Button } from "../Button/Button"
import type { buttonVariants } from "../Button/Button.variants"

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

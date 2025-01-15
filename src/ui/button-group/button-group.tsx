"use client"

import type { VariantProps } from "~/shared/cva"
import { cx } from "~/shared/cva"
import type { ButtonProps } from "~/ui/button/button"
import { Button } from "~/ui/button/button"
import type { buttonVariants } from "~/ui/button/button.variants"
import { buttonGroupVariants } from "./button-group.variants"

export type ButtonGroupProps = ButtonProps &
  VariantProps<typeof buttonGroupVariants> &
  VariantProps<typeof buttonVariants> & {
    /**
     * The buttons to display in the group.
     */
    buttons?: ButtonProps[]
  }

const ButtonGroup = ({
  children,
  className,
  buttons,
  theme = "secondary",
  variant = "outline",
  ...props
}: ButtonGroupProps) => {
  return (
    <div className={cx(buttonGroupVariants({ className }))}>
      {buttons?.map((button, i) => (
        <Button key={`button-${i}`} theme={theme} variant={variant} {...button} {...props} />
      ))}

      {children}
    </div>
  )
}

export { ButtonGroup }

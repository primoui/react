"use client"

import { Slot } from "@radix-ui/react-slot"
import type { HTMLAttributes, LabelHTMLAttributes, ReactNode } from "react"
import { inputVariants } from "~/forms/controls/Input/Input.variants"
import { type VariantProps, cx } from "~/shared/cva"
import { boxGroupVariants, boxVariants } from "./Box.variants"

export type BoxProps = LabelHTMLAttributes<HTMLLabelElement> & {
  /**
   * The label for the box.
   */
  label?: ReactNode

  /**
   * The slot to be rendered after the label.
   */
  suffix?: ReactNode
}

const BoxBase = ({ children, className, htmlFor, label, suffix, ...props }: BoxProps) => {
  const cn = cx(inputVariants({ hoverable: true }), boxVariants({ className }))

  return (
    <label htmlFor={htmlFor} className={cn} {...props}>
      {children}

      {label && (
        <span className="flex-1 truncate text-sm font-medium peer-data-[state=unchecked]:opacity-60">
          {label}
        </span>
      )}

      <Slot className="ml-auto">{suffix}</Slot>
    </label>
  )
}

const BoxGroup = ({
  className,
  boxed,
  ...props
}: HTMLAttributes<HTMLElement> & VariantProps<typeof boxGroupVariants>) => {
  return <div className={cx(boxGroupVariants({ boxed, className }))} {...props} />
}

const Box = Object.assign(BoxBase, {
  Group: BoxGroup,
})

export { Box, BoxGroup }

"use client"

import type { HTMLAttributes, ReactNode } from "react"

import type { VariantProps } from "~/shared/cva"
import { Subheading } from "../../typography/Subheading"

import { dividerVariants } from "./Divider.variants"

export type DividerProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof dividerVariants> & {
    /**
     * The label to display in the divider.
     * @default "or"
     */
    label?: ReactNode
  }

export const Divider = ({ children, className, label = "or", ...rest }: DividerProps) => {
  return (
    <div className={dividerVariants({ className })} {...rest}>
      {children ?? (
        <Subheading size="xs" className="text-gray-400">
          {label}
        </Subheading>
      )}
    </div>
  )
}

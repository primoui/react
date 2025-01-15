"use client"

import type { HTMLAttributes, ReactNode } from "react"
import type { VariantProps } from "~/shared/cva"
import { cx } from "~/shared/cva"
import { Hint } from "../Hint/Hint"
import { Label } from "../Label/Label"
import { fieldContentVariants, fieldLabelVariants, fieldVariants } from "./Field.variants"

export type FieldProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof fieldVariants> & {
    /**
     * The label for the field.
     */
    label?: ReactNode

    /**
     * The hint text for the field.
     */
    hint?: ReactNode

    /**
     * The side hint text for the field.
     */
    sideHint?: ReactNode

    /**
     * The tooltip text for the field.
     */
    tooltip?: ReactNode

    /**
     * Indicates if the field is required.
     */
    isRequired?: boolean
  }

const Field = ({
  children,
  className,
  id,
  label,
  hint,
  sideHint,
  tooltip,
  isRequired,
  ...props
}: FieldProps) => {
  return (
    <div className={cx(fieldVariants({ className }))} {...props}>
      {label && (
        <div className={cx(fieldLabelVariants())}>
          <Label htmlFor={id} isRequired={isRequired}>
            {label}
          </Label>

          {sideHint && <Hint className="w-full">{sideHint}</Hint>}
        </div>
      )}

      <div className={cx(fieldContentVariants())}>
        {children}
        {hint && <Hint>{hint}</Hint>}
      </div>
    </div>
  )
}

export { Field }

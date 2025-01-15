"use client"

import Sketch, { type SketchProps } from "@uiw/react-color-sketch"
import { Grid, X } from "lucide-react"
import type { HTMLAttributes } from "react"
import type { VariantProps } from "~/shared/cva"
import { cx } from "~/shared/cva"
import { Popover } from "~/ui/Popover"
import { inputVariants } from "../Input/Input.variants"
import {
  colorPickerClearVariants,
  colorPickerPreviewVariants,
  colorPickerVariants,
} from "./ColorPicker.variants"

export type ColorPickerProps = Omit<HTMLAttributes<HTMLDivElement>, "onChange"> &
  VariantProps<typeof colorPickerVariants> &
  SketchProps & {
    /**
     * The label for the input
     */
    label?: string

    /**
     * Callback for when the delete button is clicked
     */
    onClear?: () => void
  }

export const ColorPicker = ({
  children,
  className,
  label = "Pick color",
  color,
  onClear,
  ...rest
}: ColorPickerProps) => {
  return (
    <div className={cx(colorPickerVariants({ className }))}>
      <Popover popover={<Sketch color={color} className="-mx-3 -my-1.5 !shadow-none" {...rest} />}>
        <button type="button" className={cx(inputVariants({ className: "w-auto" }))}>
          <div className={cx(colorPickerPreviewVariants())}>
            <Grid className="size-full opacity-25" />
            {!!color && <div className="absolute inset-0" style={{ backgroundColor: color }} />}
          </div>

          <div className={cx("grow truncate", color ? "font-mono" : "opacity-50")}>
            {color || label}
          </div>
        </button>
      </Popover>

      {!!color && (
        <button type="button" className={cx(colorPickerClearVariants())} onClick={onClear}>
          <X className="pointer-events-none size-3.5" />
        </button>
      )}
    </div>
  )
}

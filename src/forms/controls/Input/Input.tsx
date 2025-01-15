"use client"

import { type InputHTMLAttributes, forwardRef } from "react"

import type { VariantProps } from "../../../shared"
import { cx } from "../../../shared"
import { useAffix } from "../../ui/Affix/Affix"

import { inputVariants } from "./Input.variants"

export type InputElement = HTMLInputElement
export type InputProps = InputHTMLAttributes<InputElement> & VariantProps<typeof inputVariants>

export const Input = forwardRef<InputElement, InputProps>(
  (
    {
      className,
      style,
      error = false,
      mono = false,
      plain = false,
      hoverable = false,
      type = "text",
      ...rest
    },
    ref,
  ) => {
    const { prefixWidth, suffixWidth } = useAffix()

    return (
      <input
        ref={ref}
        type={type}
        className={cx(inputVariants({ error, mono, plain, hoverable, className }))}
        style={{ ...style, paddingLeft: prefixWidth, paddingRight: suffixWidth }}
        {...rest}
      />
    )
  },
)

Input.displayName = "Input"

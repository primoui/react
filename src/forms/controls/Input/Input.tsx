"use client"

import type { InputHTMLAttributes } from "react"

import type { VariantProps } from "../../../shared"
import { cx } from "../../../shared"
import { useAffix } from "../../ui/Affix/Affix"

import { inputVariants } from "./Input.variants"

export type InputProps = InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof inputVariants>

export const Input = ({
  className,
  style,
  error = false,
  mono = false,
  plain = false,
  hoverable = false,
  type = "text",
  ...rest
}: InputProps) => {
  const { prefixWidth, suffixWidth } = useAffix()

  return (
    <input
      type={type}
      className={cx(inputVariants({ error, mono, plain, hoverable, className }))}
      style={{ ...style, paddingLeft: prefixWidth, paddingRight: suffixWidth }}
      {...rest}
    />
  )
}

"use client"

import type { InputHTMLAttributes } from "react"
import { useAffix } from "~/forms/ui/Affix/Affix"
import type { VariantProps } from "~/shared/cva"
import { cx } from "~/shared/cva"
import { inputVariants } from "./Input.variants"

export type InputProps = InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof inputVariants>

const Input = ({
  className,
  style,
  error = false,
  mono = false,
  plain = false,
  hoverable = false,
  type = "text",
  ...props
}: InputProps) => {
  const { prefixWidth, suffixWidth } = useAffix()

  return (
    <input
      type={type}
      className={cx(inputVariants({ error, mono, plain, hoverable, className }))}
      style={{ ...style, paddingLeft: prefixWidth, paddingRight: suffixWidth }}
      {...props}
    />
  )
}

export { Input }

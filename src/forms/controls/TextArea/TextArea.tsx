"use client"

import type { TextareaHTMLAttributes } from "react"

import type { VariantProps } from "../../../shared"
import { cx } from "../../../shared"
import { useAffix } from "../../ui/Affix/Affix"
import { inputVariants } from "../Input/Input.variants"

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  VariantProps<typeof inputVariants>

export const TextArea = ({
  className,
  style,
  error = false,
  mono = false,
  plain = false,
  ...rest
}: TextAreaProps) => {
  const { prefixWidth, suffixWidth } = useAffix()

  return (
    <textarea
      className={cx(inputVariants({ error, mono, plain, className }))}
      style={{ ...style, paddingLeft: prefixWidth, paddingRight: suffixWidth }}
      {...rest}
    />
  )
}

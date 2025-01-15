"use client"

import type { TextareaHTMLAttributes } from "react"
import { useAffix } from "~/forms/ui/affix/affix"
import type { VariantProps } from "~/shared/cva"
import { cx } from "~/shared/cva"
import { inputVariants } from "../input/input.variants"

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  VariantProps<typeof inputVariants>

const TextArea = ({
  className,
  style,
  error = false,
  mono = false,
  plain = false,
  ...props
}: TextAreaProps) => {
  const { prefixWidth, suffixWidth } = useAffix()

  return (
    <textarea
      className={cx(inputVariants({ error, mono, plain, className }))}
      style={{ ...style, paddingLeft: prefixWidth, paddingRight: suffixWidth }}
      {...props}
    />
  )
}

export { TextArea }

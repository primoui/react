"use client"

import type { TextareaHTMLAttributes } from "react"
import { forwardRef } from "react"

import type { VariantProps } from "../../../shared"
import { cx } from "../../../shared"
import { useAffix } from "../../ui/Affix/Affix"
import { inputVariants } from "../Input/Input.variants"

export type TextAreaElement = HTMLTextAreaElement
export type TextAreaProps = TextareaHTMLAttributes<TextAreaElement> &
  VariantProps<typeof inputVariants>

export const TextArea = forwardRef<TextAreaElement, TextAreaProps>(
  ({ className, style, error = false, mono = false, plain = false, ...rest }, ref) => {
    const { prefixWidth, suffixWidth } = useAffix()

    return (
      <textarea
        ref={ref}
        className={cx(inputVariants({ error, mono, plain, className }))}
        style={{ ...style, paddingLeft: prefixWidth, paddingRight: suffixWidth }}
        {...rest}
      />
    )
  },
)

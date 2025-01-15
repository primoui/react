"use client"

import { cx } from "../../../shared"
import type { ParagraphProps } from "../../../typography/Paragraph"
import { Paragraph } from "../../../typography/Paragraph"

import { hintVariants } from "./Hint.variants"

export type HintProps = ParagraphProps

export const Hint = (props: HintProps) => {
  const { className, ...rest } = props

  return <Paragraph size="xs" className={cx(hintVariants({ className }))} {...rest} />
}

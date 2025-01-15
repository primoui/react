"use client"

import { cx } from "~/shared/cva"
import type { ParagraphProps } from "../../../typography/Paragraph"
import { Paragraph } from "../../../typography/Paragraph"

import { errorVariants } from "./Error.variants"

export type ErrorProps = ParagraphProps

export const Error = (props: ErrorProps) => {
  const { className, ...rest } = props

  return <Paragraph size="xs" className={cx(errorVariants({ className }))} {...rest} />
}

"use client"

import { cx } from "~/shared/cva"
import type { ParagraphProps } from "~/typography/Paragraph"
import { Paragraph } from "~/typography/Paragraph"
import { errorVariants } from "./Error.variants"

export type ErrorProps = ParagraphProps

export const Error = ({ className, ...props }: ErrorProps) => {
  return <Paragraph size="xs" className={cx(errorVariants({ className }))} {...props} />
}

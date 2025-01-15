"use client"

import { cx } from "~/shared/cva"
import type { ParagraphProps } from "~/typography/paragraph"
import { Paragraph } from "~/typography/paragraph"
import { errorVariants } from "./error.variants"

export type ErrorProps = ParagraphProps

const Error = ({ className, ...props }: ErrorProps) => {
  return <Paragraph size="xs" className={cx(errorVariants({ className }))} {...props} />
}

export { Error }

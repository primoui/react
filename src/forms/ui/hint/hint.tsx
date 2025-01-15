"use client"

import { cx } from "~/shared/cva"
import type { ParagraphProps } from "~/typography/paragraph"
import { Paragraph } from "~/typography/paragraph"
import { hintVariants } from "./hint.variants"

export type HintProps = ParagraphProps

const Hint = ({ className, ...props }: HintProps) => {
  return <Paragraph size="xs" className={cx(hintVariants({ className }))} {...props} />
}

export { Hint }

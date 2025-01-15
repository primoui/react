"use client"

import { cx } from "~/shared/cva"
import type { ParagraphProps } from "~/typography/Paragraph"
import { Paragraph } from "~/typography/Paragraph"
import { hintVariants } from "./Hint.variants"

export type HintProps = ParagraphProps

const Hint = ({ className, ...props }: HintProps) => {
  return <Paragraph size="xs" className={cx(hintVariants({ className }))} {...props} />
}

export { Hint }

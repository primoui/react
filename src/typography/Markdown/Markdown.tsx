"use client"

import type { MarkdownToJSX } from "markdown-to-jsx"
import MarkdownParser from "markdown-to-jsx"
import type { ProseProps } from "~/typography/Prose"
import { Prose } from "~/typography/Prose"

export type MarkdownProps = Omit<ProseProps, "children"> & {
  content: string
  options?: MarkdownToJSX.Options
}

export const Markdown = ({
  content,
  options = { wrapper: Prose, forceWrapper: true },
  ...rest
}: MarkdownProps) => {
  return (
    <MarkdownParser options={options} {...rest}>
      {content}
    </MarkdownParser>
  )
}

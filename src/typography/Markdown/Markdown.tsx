"use client"

import type { MarkdownToJSX } from "markdown-to-jsx"
import MarkdownParser from "markdown-to-jsx"
import type { ProseProps } from "~/typography/Prose"
import { Prose } from "~/typography/Prose"

export type MarkdownProps = Omit<ProseProps, "children"> & {
  content: string
  options?: MarkdownToJSX.Options
}

const Markdown = ({
  content,
  options = { wrapper: Prose, forceWrapper: true },
  ...props
}: MarkdownProps) => {
  return (
    <MarkdownParser options={options} {...props}>
      {content}
    </MarkdownParser>
  )
}

export { Markdown }

"use client"

import { EditorContent } from "@tiptap/react"
import type { ComponentProps } from "react"

import type { VariantProps } from "../../../shared"
import { cx } from "../../../shared"
import { proseVariants } from "../../../typography/Prose/Prose.variants"
import type { SeriesProps } from "../../../ui/Stack"
import { Series } from "../../../ui/Stack"

import { editorContentVariants, editorMenuVariants, editorVariants } from "./Editor.variants"

export type EditorProps = ComponentProps<typeof EditorContent> & VariantProps<typeof editorVariants>

const EditorRoot = ({ className, error, plain, ...rest }: EditorProps) => {
  return <EditorContent className={cx(editorVariants({ error, plain, className }))} {...rest} />
}

type EditorMenuProps = SeriesProps & VariantProps<typeof editorMenuVariants>

export const EditorMenu = ({ className, plain, ...rest }: EditorMenuProps) => {
  return <Series size="sm" className={cx(editorMenuVariants({ plain, className }))} {...rest} />
}

export const Editor = Object.assign(EditorRoot, {
  Menu: EditorMenu,
  ContentClass: ({ compact, plain }: VariantProps<typeof editorContentVariants>) =>
    cx(
      editorContentVariants({
        compact,
        plain,
        className: proseVariants({ size: compact ? "sm" : "md" }),
      }),
    ),
})

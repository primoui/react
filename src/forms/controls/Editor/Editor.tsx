"use client"

import { EditorContent } from "@tiptap/react"
import type { ComponentProps } from "react"
import { type VariantProps, cx } from "~/shared/cva"
import { proseVariants } from "~/typography/Prose/Prose.variants"
import { Stack } from "~/ui/Stack"

import { editorContentVariants, editorMenuVariants, editorVariants } from "./Editor.variants"

type EditorProps = ComponentProps<typeof EditorContent> & VariantProps<typeof editorVariants>

const EditorRoot = ({ className, error, plain, ...props }: EditorProps) => {
  return <EditorContent className={cx(editorVariants({ error, plain, className }))} {...props} />
}

type EditorMenuProps = ComponentProps<typeof Stack> & VariantProps<typeof editorMenuVariants>

const EditorMenu = ({ className, plain, ...props }: EditorMenuProps) => {
  return <Stack size="sm" className={cx(editorMenuVariants({ plain, className }))} {...props} />
}

const Editor = Object.assign(EditorRoot, {
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

export { Editor, EditorMenu }

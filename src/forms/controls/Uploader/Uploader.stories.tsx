import type { Meta, StoryObj } from "@storybook/react"
import { Uploader } from "./Uploader"

type Story = StoryObj<typeof Uploader>

// Meta
export default {
  title: "Form Control/Uploader",
  component: Uploader,
  args: {
    accept: undefined,
    onDrop: () => undefined,
    onClear: () => undefined,
  },
} satisfies Meta<typeof Uploader>

// Stories
export const Default = {
  args: {},
} satisfies Story

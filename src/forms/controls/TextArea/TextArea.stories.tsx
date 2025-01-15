import type { Meta, StoryObj } from "@storybook/react"

import { TextArea } from "./TextArea"

type Story = StoryObj<typeof TextArea>

// Meta
export default {
  title: "Form Control/TextArea",
  component: TextArea,
  args: {
    id: "",
    name: "",
    value: "",
    disabled: false,
    required: false,
    readOnly: false,
    placeholder: "Type here...",
  },
} satisfies Meta<typeof TextArea>

// Stories
export const Default = {
  args: {},
} satisfies Story

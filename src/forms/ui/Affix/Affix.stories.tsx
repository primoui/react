import type { Meta, StoryObj } from "@storybook/react"
import { Affix } from "./Affix"

type Story = StoryObj<typeof Affix>

// Meta
export default {
  title: "Form UI/Affix",
  component: Affix,
  args: {
    disabled: false,
  },
} satisfies Meta<typeof Affix>

// Stories
export const Default = {
  args: {},
} satisfies Story

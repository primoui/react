import type { Meta, StoryObj } from "@storybook/react"
import { Wrapper } from "./Wrapper"

type Story = StoryObj<typeof Wrapper>

// Meta
export default {
  title: "Layout/Wrapper",
  component: Wrapper,
  parameters: {
    layout: "padded",
  },
  args: {
    children: "Wrapper",
  },
} satisfies Meta<typeof Wrapper>

// Stories
export const Default = {
  args: {},
} satisfies Story

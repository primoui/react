import type { Meta, StoryObj } from "@storybook/react"
import { Shimmer } from "./Shimmer"

type Story = StoryObj<typeof Shimmer>

// Meta
export default {
  title: "UI/Shimmer",
  component: Shimmer,
  args: {},
} satisfies Meta<typeof Shimmer>

// Stories
export const Default = {
  args: {},
} satisfies Story

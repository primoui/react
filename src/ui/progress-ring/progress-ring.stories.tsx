import type { Meta, StoryObj } from "@storybook/react"
import { ProgressRing } from "./progress-ring"

type Story = StoryObj<typeof ProgressRing>

// Meta
export default {
  title: "UI/ProgressRing",
  component: ProgressRing,
  args: {
    theme: "blue",
    size: "md",
    percent: 50,
  },
} satisfies Meta<typeof ProgressRing>

// Stories
export const Default = {
  args: {},
} satisfies Story

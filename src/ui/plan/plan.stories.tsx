import type { Meta, StoryObj } from "@storybook/react"
import { Plan } from "./plan"

type Story = StoryObj<typeof Plan>

// Meta
export default {
  title: "UI/Plan",
  component: Plan,
  args: {},
} satisfies Meta<typeof Plan>

// Stories
export const Default = {
  args: {},
} satisfies Story

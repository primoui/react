import type { Meta, StoryObj } from "@storybook/react"
import { Alert } from "./Alert"

type Story = StoryObj<typeof Alert>

// Meta
export default {
  title: "UI/Alert",
  component: Alert,
  args: {},
} satisfies Meta<typeof Alert>

// Stories
export const Default = {
  args: {},
} satisfies Story

import type { Meta, StoryObj } from "@storybook/react"
import { Ping } from "./ping"

type Story = StoryObj<typeof Ping>

// Meta
export default {
  title: "UI/Ping",
  component: Ping,
  args: {
    theme: "gray",
  },
} satisfies Meta<typeof Ping>

// Stories
export const Default = {
  args: {},
} satisfies Story

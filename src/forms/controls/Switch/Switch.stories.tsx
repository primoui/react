import type { Meta, StoryObj } from "@storybook/react"
import { Switch } from "./Switch"

type Story = StoryObj<typeof Switch>

// Meta
export default {
  title: "Form Control/Switch",
  component: Switch,
  args: {
    disabled: false,
    error: false,
    required: false,
  },
} satisfies Meta<typeof Switch>

// Stories
export const Default = {
  args: {},
} satisfies Story

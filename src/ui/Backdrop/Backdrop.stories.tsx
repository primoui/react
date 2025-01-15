import type { Meta, StoryObj } from "@storybook/react"
import { Backdrop } from "./Backdrop"

type Story = StoryObj<typeof Backdrop>

// Meta
export default {
  title: "UI/Backdrop",
  component: Backdrop,
  args: {},
} satisfies Meta<typeof Backdrop>

// Stories
export const Default = {
  args: {},
} satisfies Story

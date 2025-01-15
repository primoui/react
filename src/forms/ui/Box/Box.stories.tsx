import type { Meta, StoryObj } from "@storybook/react"

import { Box } from "./Box"

type Story = StoryObj<typeof Box>

// Meta
export default {
  title: "Form UI/Box",
  component: Box,
  args: {},
} satisfies Meta<typeof Box>

// Stories
export const Default = {
  args: {},
} satisfies Story

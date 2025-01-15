import type { Meta, StoryObj } from "@storybook/react"

import { Dot } from "./Dot"

type Story = StoryObj<typeof Dot>

// Meta
export default {
  title: "UI/Dot",
  component: Dot,
  args: {
    variant: "solid",
  },
} satisfies Meta<typeof Dot>

// Stories
export const Default = {
  args: {},
} satisfies Story

export const AsChild = {
  args: {
    asChild: true,
    children: <a href="/" />,
  },
} satisfies Story

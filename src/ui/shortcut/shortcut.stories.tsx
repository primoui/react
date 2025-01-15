import type { Meta, StoryObj } from "@storybook/react"
import { Shortcut } from "./shortcut"

type Story = StoryObj<typeof Shortcut>

// Meta
export default {
  title: "UI/Shortcut",
  component: Shortcut,
  args: {
    variant: "outline",
    size: "sm",
    children: "⌘K",
  },
} satisfies Meta<typeof Shortcut>

// Stories
export const Default = {
  args: {},
} satisfies Story

export const AsChild = {
  args: {
    asChild: true,
    children: <a href="/">⌘K</a>,
  },
} satisfies Story

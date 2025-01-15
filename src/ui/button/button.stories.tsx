import type { Meta, StoryObj } from "@storybook/react"
import { User } from "lucide-react"
import { Button } from "./button"

type Story = StoryObj<typeof Button>

// Meta
export default {
  title: "UI/Button",
  component: Button,
  args: {
    type: "button",
    theme: "primary",
    variant: "solid",
    size: "lg",
    asChild: false,
    disabled: false,
    children: "Button",
  },
} satisfies Meta<typeof Button>

// Stories
export const Default = {
  args: {},
} satisfies Story

export const AsChild = {
  args: {
    asChild: true,
    children: <a href="/">Link Button</a>,
  },
} satisfies Story

export const WithPrefix = {
  args: {
    prefix: <User />,
  },
} satisfies Story

export const WithSuffix = {
  args: {
    suffix: <User />,
  },
} satisfies Story

export const WithIconOnly = {
  args: {
    prefix: <User />,
    children: null,
  },
} satisfies Story

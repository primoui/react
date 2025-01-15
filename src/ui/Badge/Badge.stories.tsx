import type { Meta, StoryObj } from "@storybook/react"
import { Dot, User } from "lucide-react"
import { Badge } from "./Badge"

type Story = StoryObj<typeof Badge>

// Meta
export default {
  title: "UI/Badge",
  component: Badge,
  args: {
    theme: "blue",
    variant: "solid",
    size: "md",
    shape: "rounded",
    children: "Badge",
  },
} satisfies Meta<typeof Badge>

// Stories
export const Default = {
  args: {},
} satisfies Story

export const AsChild = {
  args: {
    asChild: true,
    children: <a href="/">Link Badge</a>,
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

export const WithStatus = {
  args: {
    theme: "gray",
    variant: "outline",
    prefix: <Dot style={{ color: "blue" }} />,
  },
} satisfies Story

export const WithIconOnly = {
  args: {
    prefix: <User />,
    children: null,
  },
} satisfies Story

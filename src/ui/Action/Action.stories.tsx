import type { Meta, StoryObj } from "@storybook/react"
import { User } from "lucide-react"

import { Action } from "./Action"

type Story = StoryObj<typeof Action>

// Meta
export default {
  title: "UI/Action",
  component: Action,
  args: {
    children: "Action",
    disabled: false,
  },
} satisfies Meta<typeof Action>

// Stories
export const Default = {
  args: {},
} satisfies Story

export const AsChild = {
  args: {
    asChild: true,
    children: <a href="/">Link Action</a>,
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

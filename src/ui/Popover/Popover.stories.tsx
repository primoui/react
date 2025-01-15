import type { Meta, StoryObj } from "@storybook/react"

import { Paragraph } from "~/typography/Paragraph"
import { Badge } from "~/ui/Badge"

import { Popover } from "./Popover"

type Story = StoryObj<typeof Popover>

// Meta
export default {
  title: "UI/Popover",
  component: Popover,
  args: {
    popover: "Fugiat esse reprehenderit aliqua ea ad est.",
  },
  render: props => (
    <Popover {...props}>
      <Badge>Click me</Badge>
    </Popover>
  ),
} satisfies Meta<typeof Popover>

// Stories
export const Default = {
  args: {},
} satisfies Story

export const WithCustomMarkup = {
  args: {
    align: "start",
    side: "right",
    popover: (
      <div className="flex">
        <Paragraph size="sm">
          Consequat aute labore est labore enim ut ullamco irure sint ea tempor consectetur.
        </Paragraph>

        <Popover.Close />
      </div>
    ),
  },
  render: props => (
    <Popover {...props}>
      <Badge>Click me</Badge>
    </Popover>
  ),
} satisfies Story

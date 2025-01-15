import type { Meta, StoryObj } from "@storybook/react"

import { Badge } from "../Badge"

import { Tooltip } from "./Tooltip"

type Story = StoryObj<typeof Tooltip>

// Meta
export default {
  title: "UI/Tooltip",
  component: Tooltip,
  args: {
    align: "center",
    delayDuration: 0,
    collisionPadding: 5,
    sideOffset: 4,
    tooltip: "Copy to clipboard",
  },
  render: props => (
    <Tooltip {...props}>
      <Badge>Hover me</Badge>
    </Tooltip>
  ),
} satisfies Meta<typeof Tooltip>

// Stories
export const Default = {
  args: {},
} satisfies Story

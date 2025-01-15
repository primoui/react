import type { Meta, StoryObj } from "@storybook/react"

import { IconChevronRight } from "../../icons/IconChevronRight"
import { IconUser } from "../../icons/IconUser"

import { MenuItem } from "./MenuItem"

type Story = StoryObj<typeof MenuItem>

// Meta
export default {
  title: "UI/MenuItem",
  component: MenuItem,
  args: {
    theme: "secondary",
    size: "md",
    linkable: false,
    style: { width: 200 },
    children: "Dashboard",
    prefix: <IconUser />,
    suffix: <IconChevronRight />,
  },
} satisfies Meta<typeof MenuItem>

// Stories
export const Default = {
  args: {},
} satisfies Story

import type { Meta, StoryObj } from "@storybook/react"
import { ChevronRight, User } from "lucide-react"
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
    prefix: <User />,
    suffix: <ChevronRight />,
  },
} satisfies Meta<typeof MenuItem>

// Stories
export const Default = {
  args: {},
} satisfies Story

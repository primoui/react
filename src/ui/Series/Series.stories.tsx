import type { Meta, StoryObj } from "@storybook/react"
import { User, X } from "lucide-react"
import { Button } from "../Button"

import { Series } from "./Series"

type Story = StoryObj<typeof Series>

// Meta
export default {
  title: "UI/Series",
  component: Series,
  args: {
    size: "md",
    direction: "row",
    children: (
      <>
        <Button theme="secondary" variant="ghost" prefix={<User />} />
        <Button theme="secondary" variant="ghost" prefix={<User />} />
        <Button theme="secondary" variant="outline" prefix={<User />}>
          Schedule
        </Button>
        <Button prefix={<X />}>Create Request</Button>
      </>
    ),
  },
} satisfies Meta<typeof Series>

// Stories
export const Default = {
  args: {},
} satisfies Story

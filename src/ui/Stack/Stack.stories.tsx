import type { Meta, StoryObj } from "@storybook/react"
import { User, X } from "lucide-react"
import { Button } from "~/ui/Button"
import { Stack } from "./Stack"

type Story = StoryObj<typeof Stack>

// Meta
export default {
  title: "UI/Stack",
  component: Stack,
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
} satisfies Meta<typeof Stack>

// Stories
export const Default = {
  args: {},
} satisfies Story

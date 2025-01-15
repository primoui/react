import type { Meta, StoryObj } from "@storybook/react"
import { User } from "lucide-react"
import { Affix } from "../../ui/Affix"
import { Input } from "./Input"

type Story = StoryObj<typeof Input>

// Meta
export default {
  title: "Form Control/Input",
  component: Input,
  args: {
    type: "text",
    error: false,
    mono: false,
    plain: false,
    hoverable: false,
    placeholder: "Type here...",
  },
} satisfies Meta<typeof Input>

// Stories
export const Default = {
  args: {},
} satisfies Story

export const WithAffix = {
  args: {},
  render: props => (
    <Affix prefix={<User />} suffix={<span>Suffix</span>}>
      <Input {...props} />
    </Affix>
  ),
} satisfies Story

import type { Meta, StoryObj } from "@storybook/react"
import { Fieldset } from "./fieldset"

type Story = StoryObj<typeof Fieldset>

export default {
  component: Fieldset,
  args: {
    layout: "adaptive",
    columns: 1,
    disabled: false,
    children: null,
    "aria-label": "Fieldset example",
  },
} satisfies Meta<typeof Fieldset>

export const Default: Story = {
  args: {
    children: <div>Fieldset content</div>,
  },
}

import type { Meta, StoryObj } from "@storybook/react"
import { Section } from "./section"

type Story = StoryObj<typeof Section>

// Meta
export default {
  title: "Layout/Section",
  component: Section,
  parameters: {
    layout: "padded",
  },
  args: {
    children: "Section",
  },
} satisfies Meta<typeof Section>

// Stories
export const Default = {
  args: {},
} satisfies Story

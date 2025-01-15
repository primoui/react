import type { Meta, StoryObj } from "@storybook/react"
import { Modal } from "./Modal"

type Story = StoryObj<typeof Modal>

// Meta
export default {
  title: "UI/Modal",
  component: Modal,
  args: {
    size: "md",
    fixed: true,
    children: "Modal content",
    className: "static",
  },
} satisfies Meta<typeof Modal>

// Stories
export const Default = {
  args: {},
} satisfies Story

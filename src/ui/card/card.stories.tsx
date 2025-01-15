import type { Meta, StoryObj } from "@storybook/react"
import { Header } from "~/layout/header"
import { Paragraph } from "~/typography/paragraph"
import { Button } from "~/ui/button"

import { Card } from "./card"

type Story = StoryObj<typeof Card>

// Meta
export default {
  title: "UI/Card",
  component: Card,
  args: {
    children: "Card content",
  },
} satisfies Meta<typeof Card>

// Stories
export const Default = {
  args: {},
} satisfies Story

export const WithCustomMarkup = {
  render: props => (
    <Card {...props}>
      <Card.Panel>
        <Header title="Confirm your action?" />

        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quisquam, quos?
        </Paragraph>
      </Card.Panel>

      <Card.Row>
        <Button size="lg">Confirm</Button>
      </Card.Row>
    </Card>
  ),
} satisfies Story

import type { Meta, StoryObj } from "@storybook/react"
import { ChevronRight, User } from "lucide-react"

import { Badge } from "~/ui/Badge"
import { Blurb } from "~/ui/Blurb"
import { FeatureCard } from "~/ui/FeatureCard"
import { default as FeatureCardDefault } from "~/ui/FeatureCard/FeatureCard.stories"
import { MenuItem } from "~/ui/MenuItem"
import { Shortcut } from "~/ui/Shortcut"

import { Sidebar } from "./Sidebar"

type Story = StoryObj<typeof Sidebar>

const menus = {
  Main: [
    {
      children: "Dashboard",
      prefix: <User />,
      active: true,
    },
    {
      children: "My Cards",
      prefix: <User />,
    },
    {
      children: "Transfer",
      prefix: <User />,
    },
    {
      children: "Transactions",
      prefix: <User />,
    },
    {
      children: "Payments",
      prefix: <User />,
    },
    {
      children: "Exchange",
      prefix: <User />,
      suffix: (
        <Badge theme="gray" variant="soft">
          Soon
        </Badge>
      ),
      disabled: true,
    },
  ],

  Other: [
    {
      children: "Settings",
      prefix: <User />,
      suffix: <Shortcut>⌘K</Shortcut>,
    },
    {
      children: "Support",
      prefix: <User />,
      isPending: true,
    },
  ],
}

// Meta
export default {
  title: "Layout/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    children: (
      <>
        <Blurb
          avatar={{
            src: "https://uilogos.co/img/logomark/earth.png",
            size: "lg",
          }}
          title="Synergy"
          description="Finance & Banking"
        />

        <Sidebar.Separator />

        <Sidebar.Content>
          {Object.entries(menus).map(([label, items], i) => (
            <Sidebar.Menu key={i}>
              <Sidebar.Heading>{label}</Sidebar.Heading>

              {items.map((item, j) => (
                <MenuItem key={j} {...item} />
              ))}
            </Sidebar.Menu>
          ))}
        </Sidebar.Content>

        <FeatureCard theme="secondary" variant="soft" isCloseable>
          {FeatureCardDefault.args.children}
        </FeatureCard>

        <Sidebar.Separator />

        <Blurb
          avatar={{
            src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=250&h=250&auto=format&fit=crop",
            size: "lg",
          }}
          title="John Doe"
          description="Software Engineer"
        >
          <button type="button" className="ml-2 rounded border p-0.5 text-xs">
            <ChevronRight />
          </button>
        </Blurb>
      </>
    ),
  },
} satisfies Meta<typeof Sidebar>

// Stories
export const Default = {
  args: {},
} satisfies Story

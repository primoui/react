"use client"

import * as TabsPrimitive from "@radix-ui/react-tabs"
import type { ComponentProps } from "react"
import type { VariantProps } from "~/shared/cva"
import { cx } from "~/shared/cva"
import { tabsContentVariants, tabsListVariants, tabsTriggerVariants } from "./Tabs.variants"

export type TabsProps = ComponentProps<typeof TabsPrimitive.Root>

const TabsRoot = TabsPrimitive.Root

const TabsList = ({
  className,
  ...props
}: ComponentProps<typeof TabsPrimitive.List> & VariantProps<typeof tabsListVariants>) => {
  return <TabsPrimitive.List className={cx(tabsListVariants({ className }))} {...props} />
}

const TabsTrigger = ({
  className,
  ...props
}: ComponentProps<typeof TabsPrimitive.Trigger> & VariantProps<typeof tabsTriggerVariants>) => (
  <TabsPrimitive.Trigger className={cx(tabsTriggerVariants({ className }))} {...props} />
)

const TabsContent = ({
  className,
  ...props
}: ComponentProps<typeof TabsPrimitive.Content> & VariantProps<typeof tabsContentVariants>) => (
  <TabsPrimitive.Content className={cx(tabsContentVariants({ className }))} {...props} />
)

const Tabs = Object.assign(TabsRoot, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
})

export { TabsRoot, TabsList, TabsTrigger, TabsContent, Tabs }

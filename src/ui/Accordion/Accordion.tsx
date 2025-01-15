"use client"

import * as AccordionPrimitive from "@radix-ui/react-accordion"
import type { ComponentProps } from "react"
import { cx } from "~/shared/cva"
import { accordionVariants } from "./Accordion.variants"

const AccordionRoot = AccordionPrimitive.Root as typeof AccordionPrimitive.Root & {
  defaultProps: {
    collapsible: true
    type: "single"
  }
}
const AccordionItem = AccordionPrimitive.Item
const AccordionTrigger = AccordionPrimitive.Trigger

const AccordionContent = ({
  className,
  ...props
}: ComponentProps<typeof AccordionPrimitive.Content>) => (
  <AccordionPrimitive.Content
    className={cx(accordionVariants({ className }), className)}
    {...props}
  />
)

const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
})

export { Accordion, AccordionContent, AccordionItem, AccordionRoot, AccordionTrigger }

"use client"

import * as AccordionPrimitive from "@radix-ui/react-accordion"
import type { ComponentProps } from "react"

import { cx } from "~/shared/cva"

import { accordionVariants } from "./Accordion.variants"

export const AccordionRoot = AccordionPrimitive.Root as typeof AccordionPrimitive.Root & {
  defaultProps: {
    collapsible: true
    type: "single"
  }
}
export const AccordionItem = AccordionPrimitive.Item
export const AccordionTrigger = AccordionPrimitive.Trigger

export const AccordionContent = ({
  className,
  ...props
}: ComponentProps<typeof AccordionPrimitive.Content>) => (
  <AccordionPrimitive.Content
    className={cx(accordionVariants({ className }), className)}
    {...props}
  />
)

export const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
})

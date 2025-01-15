"use client"

import * as DrawerPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import type { ComponentProps } from "react"

import type { VariantProps } from "~/shared/cva"
import { cx } from "~/shared/cva"
import { Backdrop } from "../Backdrop"
import { Button } from "../Button"
import { Card } from "../Card"

import { drawerVariants } from "./Drawer.variants"

export type DrawerProps = ComponentProps<typeof DrawerPrimitive.Root>

export const DrawerRoot = DrawerPrimitive.Root
export const DrawerTrigger = DrawerPrimitive.Trigger

export const DrawerContent = ({
  className,
  size,
  direction,
  ...props
}: ComponentProps<typeof DrawerPrimitive.Content> & VariantProps<typeof drawerVariants>) => (
  <DrawerPrimitive.Portal>
    <DrawerPrimitive.Overlay asChild>
      <Backdrop />
    </DrawerPrimitive.Overlay>

    <DrawerPrimitive.Content
      onCloseAutoFocus={e => e.preventDefault()}
      className={cx(drawerVariants({ size, direction, className }))}
      {...props}
    />
  </DrawerPrimitive.Portal>
)

export const DrawerContentCard = ({ ...props }: ComponentProps<typeof DrawerContent>) => (
  <Card className="rounded-none" asChild>
    <DrawerContent {...props} />
  </Card>
)

export const DrawerPanel = ({ ...props }: ComponentProps<typeof Card.Panel>) => (
  <Card.Panel {...props} />
)

export const DrawerFooter = ({
  direction = "rowReverse",
  ...props
}: ComponentProps<typeof Card.Row>) => <Card.Row direction={direction} {...props} />

export const DrawerClose = ({
  className,
  ...props
}: ComponentProps<typeof DrawerPrimitive.Close>) => (
  <DrawerPrimitive.Close className={cx("-my-1", className)} {...props}>
    <X />
  </DrawerPrimitive.Close>
)

export const DrawerCancel = ({
  children = "Cancel",
  ...props
}: ComponentProps<typeof DrawerPrimitive.Close>) => (
  <DrawerPrimitive.Close asChild {...props}>
    <Button theme="secondary" variant="outline" size="lg">
      {children}
    </Button>
  </DrawerPrimitive.Close>
)

export const Drawer = Object.assign(DrawerRoot, {
  Trigger: DrawerTrigger,
  Content: DrawerContent,
  ContentCard: DrawerContentCard,
  Panel: DrawerPanel,
  Footer: DrawerFooter,
  Close: DrawerClose,
  Cancel: DrawerCancel,
})

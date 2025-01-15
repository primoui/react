"use client"

import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import type { ComponentProps } from "react"
import type { VariantProps } from "~/shared/cva"
import { cx } from "~/shared/cva"
import { Backdrop } from "~/ui/Backdrop"
import { Button } from "~/ui/Button"
import { Card } from "~/ui/Card"
import { Modal } from "~/ui/Modal/Modal"
import type { modalVariants } from "~/ui/Modal/Modal.variants"
import { dialogVariants } from "./Dialog.variants"

export type DialogProps = ComponentProps<typeof DialogPrimitive.Root>

const DialogRoot = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger

const DialogContent = ({
  className,
  size = "md",
  fixed,
  ...props
}: ComponentProps<typeof DialogPrimitive.Content> &
  VariantProps<typeof dialogVariants> &
  VariantProps<typeof modalVariants>) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay asChild>
      <Backdrop />
    </DialogPrimitive.Overlay>

    <Card asChild>
      <Modal size={size} fixed={fixed} asChild>
        <DialogPrimitive.Content
          onCloseAutoFocus={e => e.preventDefault()}
          className={cx(dialogVariants({ className }))}
          {...props}
        />
      </Modal>
    </Card>
  </DialogPrimitive.Portal>
)

const DialogContentCard = ({ ...props }: ComponentProps<typeof DialogContent>) => (
  <Card className="rounded-none" asChild>
    <DialogContent {...props} />
  </Card>
)

const DialogPanel = ({ ...props }: ComponentProps<typeof Card.Panel>) => <Card.Panel {...props} />

const DialogFooter = ({ direction = "rowReverse", ...props }: ComponentProps<typeof Card.Row>) => (
  <Card.Row direction={direction} {...props} />
)

const DialogClose = ({ className, ...props }: ComponentProps<typeof DialogPrimitive.Close>) => (
  <DialogPrimitive.Close className={cx("-my-1", className)} {...props}>
    <X />
  </DialogPrimitive.Close>
)

const DialogCancel = ({
  children = "Cancel",
  ...props
}: ComponentProps<typeof DialogPrimitive.Close>) => (
  <DialogPrimitive.Close asChild {...props}>
    <Button theme="secondary" variant="outline" size="lg">
      {children}
    </Button>
  </DialogPrimitive.Close>
)

const Dialog = Object.assign(DialogRoot, {
  Trigger: DialogTrigger,
  Content: DialogContent,
  ContentCard: DialogContentCard,
  Panel: DialogPanel,
  Footer: DialogFooter,
  Close: DialogClose,
  Cancel: DialogCancel,
})

export {
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogContentCard,
  DialogPanel,
  DialogFooter,
  DialogClose,
  DialogCancel,
  Dialog,
}

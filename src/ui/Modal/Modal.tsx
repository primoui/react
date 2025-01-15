"use client"

import { Slot } from "@radix-ui/react-slot"
import type { HTMLAttributes } from "react"
import { type VariantProps, cx } from "~/shared/cva"
import { isReactElement } from "~/shared/helpers"
import { modalVariants } from "./Modal.variants"

export type ModalProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof modalVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

const Modal = ({ className, asChild = false, size = "md", fixed = true, ...props }: ModalProps) => {
  const useAsChild = asChild && isReactElement(props.children)
  const Component = useAsChild ? Slot : "div"

  return <Component className={cx(modalVariants({ size, fixed, className }))} {...props} />
}

export { Modal }

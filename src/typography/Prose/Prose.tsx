"use client"

import { Slot } from "@radix-ui/react-slot"
import type { HTMLAttributes } from "react"
import { type VariantProps, cx } from "~/shared/cva"
import { isReactElement } from "~/shared/helpers"
import { proseVariants } from "./Prose.variants"

export type ProseProps = Omit<HTMLAttributes<HTMLDivElement>, "size"> &
  VariantProps<typeof proseVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

const Prose = ({ className, asChild = false, size = "md", ...props }: ProseProps) => {
  const useAsChild = asChild && isReactElement(props.children)
  const Comp = useAsChild ? Slot : "div"

  return <Comp className={cx(proseVariants({ size, className }))} {...props} />
}

export { Prose }

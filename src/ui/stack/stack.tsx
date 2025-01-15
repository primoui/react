import { Slot } from "@radix-ui/react-slot"
import type { ComponentProps } from "react"
import { isValidElement } from "react"
import { type VariantProps, cx } from "~/shared/cva"
import { stackVariants } from "~/ui/stack/stack.variants"

type StackProps = ComponentProps<"div"> &
  VariantProps<typeof stackVariants> & {
    /**
     * If stack to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

const Stack = ({ className, asChild, size, direction, ...props }: StackProps) => {
  const useAsChild = asChild && isValidElement(props.children)
  const Comp = useAsChild ? Slot : "div"

  return <Comp className={cx(stackVariants({ size, direction, className }))} {...props} />
}

export { Stack }

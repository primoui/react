"use client"

import { Slot } from "@radix-ui/react-slot"
import { X } from "lucide-react"
import type { ButtonHTMLAttributes, HTMLAttributes } from "react"
import type { VariantProps } from "~/shared/cva"
import { cx } from "~/shared/cva"
import { isReactElement } from "~/shared/helpers"
import { Slottable } from "~/utils/slottable/slottable"
import { featureCardCloserVariants, featureCardVariants } from "./feature-card.variants"

export type FeatureCardRootProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof featureCardVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

export type FeatureCardCloserProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * If set to `true`, the button will be rendered as a child within the component.
   * This child component must be a valid React component.
   */
  asChild?: boolean
}

export type FeatureCardProps = FeatureCardRootProps & {
  /**
   * If set to `true`, the card will display a close button.
   */
  isCloseable?: boolean
}

const FeatureCardRoot = ({
  className,
  asChild,
  theme = "primary",
  variant = "soft",
  ...props
}: FeatureCardRootProps) => {
  const useAsChild = asChild && isReactElement(props.children)
  const Component = useAsChild ? Slot : "div"

  return <Component className={cx(featureCardVariants({ theme, variant, className }))} {...props} />
}

const FeatureCardCloser = ({ children, className, asChild, ...props }: FeatureCardCloserProps) => {
  const useAsChild = asChild && isReactElement(children)
  const Component = useAsChild ? Slot : "button"

  return (
    <Component className={cx(featureCardCloserVariants({ className }))} {...props}>
      {useAsChild ? children : <X />}
    </Component>
  )
}

const FeatureCardBase = ({
  children,
  asChild,
  isCloseable = false,
  ...props
}: FeatureCardProps) => {
  return (
    <FeatureCardRoot asChild={asChild} {...props}>
      <Slottable child={children} asChild={asChild}>
        {child => (
          <>
            {child}
            {isCloseable && <FeatureCardCloser />}
          </>
        )}
      </Slottable>
    </FeatureCardRoot>
  )
}

const FeatureCard = Object.assign(FeatureCardBase, {
  Root: FeatureCardRoot,
  Closer: FeatureCardCloser,
})

export { FeatureCardRoot, FeatureCardCloser, FeatureCardBase, FeatureCard }

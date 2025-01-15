"use client"

import { Slot } from "@radix-ui/react-slot"
import { X } from "lucide-react"
import type { ButtonHTMLAttributes, HTMLAttributes } from "react"
import type { VariantProps } from "~/shared/cva"
import { cx } from "~/shared/cva"
import { isReactElement } from "~/shared/helpers"
import { Slottable } from "~/utils/Slottable/Slottable"
import { featureCardCloserVariants, featureCardVariants } from "./FeatureCard.variants"

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

export const FeatureCardRoot = ({
  className,
  asChild,
  theme = "primary",
  variant = "soft",
  ...rest
}: FeatureCardRootProps) => {
  const useAsChild = asChild && isReactElement(rest.children)
  const Component = useAsChild ? Slot : "div"

  return <Component className={cx(featureCardVariants({ theme, variant, className }))} {...rest} />
}

export const FeatureCardCloser = ({
  children,
  className,
  asChild,
  ...rest
}: FeatureCardCloserProps) => {
  const useAsChild = asChild && isReactElement(children)
  const Component = useAsChild ? Slot : "button"

  return (
    <Component className={cx(featureCardCloserVariants({ className }))} {...rest}>
      {useAsChild ? children : <X />}
    </Component>
  )
}

export const FeatureCardBase = ({
  children,
  asChild,
  isCloseable = false,
  ...rest
}: FeatureCardProps) => {
  return (
    <FeatureCardRoot asChild={asChild} {...rest}>
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

export const FeatureCard = Object.assign(FeatureCardBase, {
  Root: FeatureCardRoot,
  Closer: FeatureCardCloser,
})

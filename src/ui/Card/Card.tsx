"use client"

import { Slot } from "@radix-ui/react-slot"
import type { ComponentProps, HTMLAttributes } from "react"

import type { VariantProps } from "../../shared"
import { cx, isReactElement } from "../../shared"

import { sectionVariants } from "../../layout/Section/Section.variants"
import { cardPanelVariants, cardRowVariants, cardVariants } from "./Card.variants"

export type CardProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

export const CardRoot = ({ asChild = false, className, ...rest }: CardProps) => {
  const useAsChild = asChild && isReactElement(rest.children)
  const Component = useAsChild ? Slot : "div"

  return <Component className={cx(cardVariants({ className }))} {...rest} />
}

export type CardPanelProps = ComponentProps<"div"> &
  VariantProps<typeof cardPanelVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

export const CardPanel = ({
  className,
  asChild,
  size,
  theme,
  sticky,
  scrollable,
  ...rest
}: CardPanelProps) => {
  const useAsChild = asChild && isReactElement(rest.children)
  const Component = useAsChild ? Slot : "div"

  return (
    <Component
      className={cx(cardPanelVariants({ size, theme, sticky, scrollable, className }))}
      {...rest}
    />
  )
}

export const CardSection = ({
  className,
  size,
  ...rest
}: CardPanelProps & VariantProps<typeof sectionVariants>) => {
  return <CardPanel size={size} className={cx(sectionVariants({ className }))} {...rest} />
}

export const CardRow = ({
  className,
  size,
  gap,
  direction,
  theme = "gray",
  ...rest
}: CardPanelProps & VariantProps<typeof cardRowVariants>) => {
  return (
    <CardPanel
      theme={theme}
      size={size}
      className={cx(cardRowVariants({ size, gap, direction, className }))}
      {...rest}
    />
  )
}

export const Card = Object.assign(CardRoot, {
  Panel: CardPanel,
  Section: CardSection,
  Row: CardRow,
})

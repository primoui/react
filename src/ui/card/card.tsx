"use client"

import { Slot } from "@radix-ui/react-slot"
import type { ComponentProps, HTMLAttributes } from "react"
import { sectionVariants } from "~/layout/section/Section.variants"
import type { VariantProps } from "~/shared/cva"
import { cx } from "~/shared/cva"
import { isReactElement } from "~/shared/helpers"
import { cardPanelVariants, cardRowVariants, cardVariants } from "./card.variants"

export type CardProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

const CardRoot = ({ asChild = false, className, ...props }: CardProps) => {
  const useAsChild = asChild && isReactElement(props.children)
  const Component = useAsChild ? Slot : "div"

  return <Component className={cx(cardVariants({ className }))} {...props} />
}

export type CardPanelProps = ComponentProps<"div"> &
  VariantProps<typeof cardPanelVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

const CardPanel = ({
  className,
  asChild,
  size,
  theme,
  sticky,
  scrollable,
  ...props
}: CardPanelProps) => {
  const useAsChild = asChild && isReactElement(props.children)
  const Component = useAsChild ? Slot : "div"

  return (
    <Component
      className={cx(cardPanelVariants({ size, theme, sticky, scrollable, className }))}
      {...props}
    />
  )
}

const CardSection = ({
  className,
  size,
  ...props
}: CardPanelProps & VariantProps<typeof sectionVariants>) => {
  return <CardPanel size={size} className={cx(sectionVariants({ className }))} {...props} />
}

const CardRow = ({
  className,
  size,
  gap,
  direction,
  theme = "gray",
  ...props
}: CardPanelProps & VariantProps<typeof cardRowVariants>) => {
  return (
    <CardPanel
      theme={theme}
      size={size}
      className={cx(cardRowVariants({ size, gap, direction, className }))}
      {...props}
    />
  )
}

const Card = Object.assign(CardRoot, {
  Panel: CardPanel,
  Section: CardSection,
  Row: CardRow,
})

export { CardRoot, CardPanel, CardSection, CardRow, Card }

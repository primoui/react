"use client"

import { Slot } from "@radix-ui/react-slot"
import type { HTMLAttributes, ReactNode } from "react"
import { type VariantProps, cx } from "~/shared/cva"
import { isReactElement } from "~/shared/helpers"
import { Heading, type HeadingProps } from "~/typography/heading"
import { Prose, type ProseProps } from "~/typography/prose"
import { Stack } from "~/ui/stack"
import { headerDescriptionVariants, headerTitleVariants, headerVariants } from "./header.variants"

type HeaderRootProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof headerVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

export type HeaderProps = Omit<HeaderRootProps & HeadingProps, "title"> & {
  /**
   * Represents the title displayed on the Header.
   */
  title?: ReactNode

  /**
   * Represents the description displayed on the Header.
   */
  description?: string
}

const HeaderRoot = ({
  className,
  alignment = "left",
  gap,
  separated,
  sticky,
  asChild = false,
  ...props
}: HeaderRootProps) => {
  const useAsChild = asChild && isReactElement(props.children)
  const Component = useAsChild ? Slot : "div"

  return (
    <Component
      className={cx(headerVariants({ alignment, gap, separated, sticky, className }))}
      {...props}
    />
  )
}

const HeaderTitle = ({
  className,
  size = "h3",
  ...props
}: HeadingProps & VariantProps<typeof headerTitleVariants>) => {
  return <Heading size={size} className={cx(headerTitleVariants({ className }))} {...props} />
}

const HeaderDescription = ({
  className,
  size = "sm",
  ...props
}: ProseProps & VariantProps<typeof headerDescriptionVariants>) => {
  return (
    <div className="w-full">
      <Prose size={size} className={cx(headerDescriptionVariants({ className }))} {...props} />
    </div>
  )
}

const HeaderBase = ({
  children,
  title,
  description,
  size = "h3",
  alignment = "left",
  gap = "lg",
  separated = false,
  ...props
}: HeaderProps) => {
  return (
    <HeaderRoot alignment={alignment} gap={gap} separated={separated} {...props}>
      {title && <HeaderTitle size={size}>{title}</HeaderTitle>}
      {children && <Stack className="-my-0.5">{children}</Stack>}
      {description && <HeaderDescription>{description}</HeaderDescription>}
    </HeaderRoot>
  )
}

const Header = Object.assign(HeaderBase, {
  Root: HeaderRoot,
  Title: HeaderTitle,
  Description: HeaderDescription,
})

export { HeaderRoot, HeaderTitle, HeaderDescription, Header }

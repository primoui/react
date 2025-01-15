"use client"

import { Slot } from "@radix-ui/react-slot"
import type { HTMLAttributes, ReactNode } from "react"
import { type VariantProps, cx } from "~/shared/cva"
import { isReactElement } from "~/shared/helpers"
import { Heading, type HeadingProps } from "~/typography/Heading"
import { Markdown, type MarkdownProps } from "~/typography/Markdown"
import { Stack } from "~/ui/Stack"
import { headerDescriptionVariants, headerTitleVariants, headerVariants } from "./Header.variants"

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

export const HeaderRoot = ({
  className,
  alignment = "left",
  gap,
  separated,
  sticky,
  asChild = false,
  ...rest
}: HeaderRootProps) => {
  const useAsChild = asChild && isReactElement(rest.children)
  const Component = useAsChild ? Slot : "div"

  return (
    <Component
      className={cx(headerVariants({ alignment, gap, separated, sticky, className }))}
      {...rest}
    />
  )
}

export const HeaderTitle = ({
  className,
  size = "h3",
  ...rest
}: HeadingProps & VariantProps<typeof headerTitleVariants>) => {
  return <Heading size={size} className={cx(headerTitleVariants({ className }))} {...rest} />
}

export const HeaderDescription = ({
  className,
  size = "sm",
  ...rest
}: MarkdownProps & VariantProps<typeof headerDescriptionVariants>) => {
  return (
    <div className="w-full">
      <Markdown size={size} className={cx(headerDescriptionVariants({ className }))} {...rest} />
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
  ...rest
}: HeaderProps) => {
  return (
    <HeaderRoot alignment={alignment} gap={gap} separated={separated} {...rest}>
      {title && <HeaderTitle size={size}>{title}</HeaderTitle>}
      {children && <Stack className="-my-0.5">{children}</Stack>}
      {description && <HeaderDescription content={description} />}
    </HeaderRoot>
  )
}

export const Header = Object.assign(HeaderBase, {
  Root: HeaderRoot,
  Title: HeaderTitle,
  Description: HeaderDescription,
})

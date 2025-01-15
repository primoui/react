"use client"

import { Slot } from "@radix-ui/react-slot"
import { forwardRef } from "react"
import type { ComponentPropsWithoutRef, ReactNode } from "react"

import { type VariantProps, cx, isReactElement } from "../../shared"
import type { HeadingElement, HeadingProps } from "../../typography/Heading"
import { Heading } from "../../typography/Heading"
import type { MarkdownElement, MarkdownProps } from "../../typography/Markdown"
import { Markdown } from "../../typography/Markdown"
import { Series } from "../../ui/Series"

import { headerDescriptionVariants, headerTitleVariants, headerVariants } from "./Header.variants"

export type HeaderElement = HTMLDivElement

type HeaderRootProps = ComponentPropsWithoutRef<"div"> &
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

export const HeaderRoot = forwardRef<HeaderElement, HeaderRootProps>(
  ({ className, alignment, gap, separated, sticky, asChild = false, ...rest }, ref) => {
    const useAsChild = asChild && isReactElement(rest.children)
    const Component = useAsChild ? Slot : "div"

    return (
      <Component
        ref={ref}
        className={cx(headerVariants({ alignment, gap, separated, sticky, className }))}
        {...rest}
      />
    )
  },
)

export const HeaderTitle = forwardRef<
  HeadingElement,
  HeadingProps & VariantProps<typeof headerTitleVariants>
>(({ className, size = "h3", ...rest }, ref) => {
  return (
    <Heading ref={ref} size={size} className={cx(headerTitleVariants({ className }))} {...rest} />
  )
})

export const HeaderDescription = forwardRef<
  MarkdownElement,
  MarkdownProps & VariantProps<typeof headerDescriptionVariants>
>(({ className, size = "sm", ...rest }, ref) => {
  return (
    <div className="w-full">
      <Markdown
        ref={ref}
        size={size}
        className={cx(headerDescriptionVariants({ className }))}
        {...rest}
      />
    </div>
  )
})

const HeaderBase = forwardRef<HeaderElement, HeaderProps>(
  (
    {
      children,
      title,
      description,
      size = "h3",
      alignment = "left",
      gap = "lg",
      separated = false,
      ...rest
    },
    ref,
  ) => {
    return (
      <HeaderRoot ref={ref} alignment={alignment} gap={gap} separated={separated} {...rest}>
        {title && <HeaderTitle size={size}>{title}</HeaderTitle>}
        {children && <Series className="-my-0.5">{children}</Series>}
        {description && <HeaderDescription content={description} />}
      </HeaderRoot>
    )
  },
)

HeaderBase.displayName = "Header"
HeaderRoot.displayName = "HeaderRoot"
HeaderTitle.displayName = "HeaderTitle"
HeaderDescription.displayName = "HeaderDescription"

export const Header = Object.assign(HeaderBase, {
  Root: HeaderRoot,
  Title: HeaderTitle,
  Description: HeaderDescription,
})

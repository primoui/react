"use client"

import { Slot } from "@radix-ui/react-slot"
import type { ComponentProps, ReactElement } from "react"
import { type VariantProps, cx } from "~/shared/cva"
import { isReactElement } from "~/shared/helpers"
import type { ParagraphProps } from "~/typography/Paragraph"
import { Paragraph } from "~/typography/Paragraph"
import type { AvatarProps } from "~/ui/Avatar"
import { Avatar } from "~/ui/Avatar"
import {
  blurbContentVariants,
  blurbDescriptionVariants,
  blurbTitleVariants,
  blurbVariants,
} from "./Blurb.variants"

type BlurbRootProps = ComponentProps<"div"> &
  VariantProps<typeof blurbVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

export type BlurbProps = BlurbRootProps & {
  /**
   * Represents the avatar displayed on the Blurb.
   */
  avatar?: ReactElement<HTMLElement> | AvatarProps

  /**
   * Represents the title displayed on the Blurb.
   */
  title?: string

  /**
   * Represents the description displayed on the Blurb.
   */
  description?: string

  /**
   * Represents the size of the avatar and content displayed on the Blurb.
   */
  size?: "sm" | "md" | "lg"
}

export const BlurbRoot = ({ className, asChild, ...props }: BlurbRootProps) => {
  const useAsChild = asChild && isReactElement(props.children)
  const Component = useAsChild ? Slot : "div"

  return <Component className={cx(blurbVariants({ className }))} {...props} />
}

export const BlurbAvatar = ({ size = "lg", ...props }: AvatarProps) => {
  return <Avatar size={size} {...props} />
}

export const BlurbContent = ({
  className,
  ...props
}: ComponentProps<"div"> & VariantProps<typeof blurbContentVariants>) => {
  return <div className={cx(blurbContentVariants({ className }))} {...props} />
}

export const BlurbTitle = ({
  className,
  size = "sm",
  ...props
}: ParagraphProps & VariantProps<typeof blurbTitleVariants>) => {
  if (!props.children) {
    return null
  }

  return (
    <Paragraph
      size={size}
      variant="medium"
      className={cx(blurbTitleVariants({ className }))}
      {...props}
    />
  )
}

export const BlurbDescription = ({
  className,
  size = "xs",
  ...props
}: ParagraphProps & VariantProps<typeof blurbDescriptionVariants>) => {
  if (!props.children) {
    return null
  }

  return (
    <Paragraph size={size} className={cx(blurbDescriptionVariants({ className }))} {...props} />
  )
}

const BlurbBase = ({
  children,
  avatar,
  title = "",
  description = "",
  size = "sm",
  ...props
}: BlurbProps) => {
  return (
    <BlurbRoot {...props}>
      {isReactElement(avatar)
        ? avatar
        : avatar && <BlurbAvatar size={size === "sm" ? "lg" : "xl"} {...avatar} />}

      {(title || description) && (
        <BlurbContent>
          <BlurbTitle size={size}>{title}</BlurbTitle>
          <BlurbDescription size={size === "sm" ? "xs" : "sm"}>{description}</BlurbDescription>
        </BlurbContent>
      )}

      {children}
    </BlurbRoot>
  )
}

export const Blurb = Object.assign(BlurbBase, {
  Root: BlurbRoot,
  Avatar: BlurbAvatar,
  Content: BlurbContent,
  Title: BlurbTitle,
  Description: BlurbDescription,
})

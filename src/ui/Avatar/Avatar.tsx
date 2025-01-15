"use client"

import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { Slot } from "@radix-ui/react-slot"
import { Loader2, User } from "lucide-react"
import type { ComponentProps, ReactNode } from "react"
import { type VariantProps, cx } from "~/shared/cva"
import { getInitials, isReactElement } from "~/shared/helpers"
import {
  avatarFallbackVariants,
  avatarImageVariants,
  avatarStatusVariants,
  avatarVariants,
} from "./Avatar.variants"

type AvatarVariantProps = VariantProps<typeof avatarVariants> &
  VariantProps<typeof avatarImageVariants> &
  VariantProps<typeof avatarFallbackVariants>

export type AvatarProps = Omit<ComponentProps<typeof AvatarPrimitive.Image>, "src"> &
  AvatarVariantProps & {
    /**
     * The URL of the image to be displayed.
     */
    src?: string | null

    /**
     * Represents the initials displayed on the Avatar.
     *
     * - Supports single characters, two characters, or full words.
     * - For full words, initials will be derived from the first letter of the
     *   first word and the first letter of the last word.
     *
     * Example: "John Doe" => "JD"
     */
    initials?: string

    /**
     * The slot to be rendered at the top of the Avatar.
     */
    topStatus?: ReactNode

    /**
     * The slot to be rendered at the bottom of the Avatar.
     */
    bottomStatus?: ReactNode
  }

export const AvatarRoot = ({
  className,
  variant,
  size,
  shape,
  ...props
}: ComponentProps<typeof AvatarPrimitive.Root> & VariantProps<typeof avatarVariants>) => {
  return (
    <AvatarPrimitive.Root
      className={cx(avatarVariants({ variant, size, shape, className }))}
      {...props}
    />
  )
}

export const AvatarImage = ({
  className,
  ...props
}: ComponentProps<typeof AvatarPrimitive.Image> & VariantProps<typeof avatarImageVariants>) => {
  return <AvatarPrimitive.Image className={cx(avatarImageVariants({ className }))} {...props} />
}

export const AvatarFallback = ({
  className,
  ...props
}: ComponentProps<typeof AvatarPrimitive.Fallback> &
  VariantProps<typeof avatarFallbackVariants>) => {
  return (
    <AvatarPrimitive.Fallback className={cx(avatarFallbackVariants({ className }))} {...props} />
  )
}

export const AvatarStatus = ({
  className,
  position,
  ...rest
}: ComponentProps<"span"> & VariantProps<typeof avatarStatusVariants>) => {
  const Comp = isReactElement(rest.children) ? Slot : "span"

  return <Comp className={cx(avatarStatusVariants({ position, className }))} {...rest} />
}

const AvatarBase = ({
  children,
  initials,
  topStatus,
  bottomStatus,
  variant = "soft",
  size = "md",
  shape,
  src,
  alt,
  ...rest
}: AvatarProps) => {
  return (
    <AvatarRoot variant={variant} size={size} shape={shape} {...rest}>
      {/* Show image if available */}
      {src && <AvatarImage alt={alt} src={src} />}

      {/* Allow children to be used as fallback */}
      {children && (
        <AvatarFallback aria-label={alt} asChild={isReactElement(children)}>
          {children}
        </AvatarFallback>
      )}

      {/* Show pending icon until image is loaded,
          only if children fallback is not set */}
      {!children && src && !initials && (
        <AvatarFallback aria-label={alt}>
          <Loader2 aria-hidden="true" />
        </AvatarFallback>
      )}

      {/* Initials */}
      {!children && initials && (
        <AvatarFallback aria-label={alt}>
          {getInitials(initials, size === "xs" ? 1 : 2)}
        </AvatarFallback>
      )}

      {/* Fallback */}
      {!children && !src && !initials && (
        <AvatarFallback aria-label={alt} role="img">
          <User />
        </AvatarFallback>
      )}

      {/* Statuses */}
      {topStatus && <AvatarStatus position="top">{topStatus}</AvatarStatus>}
      {bottomStatus && <AvatarStatus position="bottom">{bottomStatus}</AvatarStatus>}
    </AvatarRoot>
  )
}

export const Avatar = Object.assign(AvatarBase, {
  Fallback: AvatarFallback,
  Image: AvatarImage,
  Status: AvatarStatus,
  Root: AvatarRoot,
})

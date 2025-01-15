"use client"

import type { ComponentProps, HTMLAttributes, ReactNode } from "react"
import { type VariantProps, cx } from "~/shared/cva"
import { isReactElement } from "~/shared/helpers"
import type { AvatarProps } from "~/ui/avatar/avatar"
import { Avatar } from "~/ui/avatar/avatar"
import type { avatarVariants } from "~/ui/avatar/avatar.variants"
import { avatarGroupItemVariants, avatarGroupVariants } from "./avatar-group.variants"

type AvatarGroupAvatarProps = Omit<AvatarProps, "size" | "asChild">

export type AvatarGroupRootProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof avatarGroupVariants>

export type AvatarGroupProps = AvatarGroupRootProps &
  VariantProps<typeof avatarVariants> & {
    /**
     * The items to display in the group.
     */
    items?: AvatarGroupAvatarProps[]

    /**
     * The label to display at the end of the group.
     */
    label?: ReactNode

    /**
     * Whether the previous item should be on top of the stack.
     * If false, the next item will be at the top of the stack.
     */
    previousOnTop?: boolean
  }

const AvatarGroupRoot = ({ children, className, size, ...props }: AvatarGroupRootProps) => {
  return (
    <div className={cx(avatarGroupVariants({ size, className }))} {...props}>
      {children}
    </div>
  )
}

type AvatarGroupLabelProps = ComponentProps<typeof Avatar> & {
  /**
   * The label to display.
   */
  label?: ReactNode
}

const AvatarGroupLabel = ({ children, className, label, ...props }: AvatarGroupLabelProps) => {
  return (
    <Avatar
      asChild={isReactElement(children)}
      className={cx(avatarGroupItemVariants({ className }))}
      {...props}
    >
      {!children && label}
      {children}
    </Avatar>
  )
}

const AvatarGroupItem = ({ className, ...props }: AvatarProps) => {
  return <Avatar className={cx(avatarGroupItemVariants({ className }))} {...props} />
}

const AvatarGroupBase = ({
  children,
  items,
  size = "md",
  shape,
  previousOnTop,
  label,
  ...props
}: AvatarGroupProps) => {
  const avatarProps = { size, shape }

  return (
    <AvatarGroupRoot size={size} {...props}>
      <>
        {items?.map((item, i) => {
          const style = {
            zIndex: previousOnTop ? items.length - i : undefined,
            ...item.style,
          }

          return <AvatarGroupItem key={`avatar-${i}`} style={style} {...item} {...avatarProps} />
        })}

        {children}

        {label && <AvatarGroupLabel label={label} {...avatarProps} />}
      </>
    </AvatarGroupRoot>
  )
}

const AvatarGroup = Object.assign(AvatarGroupBase, {
  Root: AvatarGroupRoot,
  Item: AvatarGroupItem,
  Label: AvatarGroupLabel,
})

export { AvatarGroupRoot, AvatarGroupLabel, AvatarGroupItem, AvatarGroup }

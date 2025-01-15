"use client"

import type { ButtonHTMLAttributes, ReactNode } from "react"

import { Slot } from "@radix-ui/react-slot"
import { Loader2 } from "lucide-react"
import type { VariantProps } from "~/shared/cva"
import { cx } from "~/shared/cva"
import { isChildrenEmpty, isReactElement, toArrayOrWrap } from "~/shared/helpers"
import { Affixable } from "~/utils/Affixable"
import { Slottable } from "~/utils/Slottable/Slottable"
import { menuItemAffixVariants, menuItemVariants } from "./MenuItem.variants"

export type MenuItemProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "prefix"> &
  VariantProps<typeof menuItemVariants> & {
    /**
     * If set to `true`, the element will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean

    /**
     * The slot to be rendered before the label.
     */
    prefix?: ReactNode | ReactNode[]

    /**
     * The slot to be rendered after the label.
     */
    suffix?: ReactNode | ReactNode[]

    /**
     * If set to `true`, the element will be rendered in the active state.
     */
    isActive?: boolean

    /**
     * If set to `true`, the element will be rendered in the pending state.
     */
    isPending?: boolean
  }

export const MenuItem = ({
  children,
  className,
  asChild = false,
  prefix: propPrefix,
  suffix: propSuffix,
  isPending = false,
  isActive = false,
  theme = "secondary",
  size = "md",
  linkable = false,
  ...rest
}: MenuItemProps) => {
  const useAsChild = asChild && isReactElement(children)
  const Component = useAsChild ? Slot : "button"

  const prefix = toArrayOrWrap(propPrefix)
  const suffix = toArrayOrWrap(propSuffix)

  if (isPending) {
    suffix.push(<Loader2 className="text-xs" />)
  }

  return (
    <Component
      aria-current={isActive ? "page" : undefined}
      className={cx(menuItemVariants({ theme, size, linkable, className }))}
      {...rest}
    >
      <Slottable child={children} asChild={asChild}>
        {child => (
          <>
            {prefix?.map((p, i) => (
              <Affixable key={i} variants={menuItemAffixVariants}>
                {p}
              </Affixable>
            ))}

            {!isChildrenEmpty(child) && <span className="flex-1 truncate">{child}</span>}

            {suffix?.map((s, i) => (
              <Affixable key={i} variants={menuItemAffixVariants}>
                {s}
              </Affixable>
            ))}
          </>
        )}
      </Slottable>
    </Component>
  )
}

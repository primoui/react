"use client"

import { Slot } from "@radix-ui/react-slot"
import type { HTMLAttributes, ReactNode } from "react"
import type { VariantProps } from "~/shared/cva"
import { cx } from "~/shared/cva"
import { isReactElement } from "~/shared/helpers"
import { Affixable } from "~/utils/Affixable/Affixable"
import { Slottable } from "~/utils/Slottable/Slottable"
import { badgeAffixVariants, badgeVariants } from "./Badge.variants"

export type BadgeProps = Omit<HTMLAttributes<HTMLSpanElement>, "size" | "prefix"> &
  VariantProps<typeof badgeVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
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
  }

export const Badge = ({
  children,
  className,
  asChild = false,
  prefix: propPrefix,
  suffix: propSuffix,
  theme = "gray",
  variant = "solid",
  size = "md",
  ...rest
}: BadgeProps) => {
  const useAsChild = asChild && isReactElement(children)
  const Component = useAsChild ? Slot : "span"

  const prefix = propPrefix ? [propPrefix].flat() : []
  const suffix = propSuffix ? [propSuffix].flat() : []

  return (
    <Component className={cx(badgeVariants({ theme, variant, size, className }))} {...rest}>
      <Slottable child={children} asChild={asChild}>
        {child => (
          <>
            {prefix?.map((p, i) => (
              <Affixable key={i} variants={badgeAffixVariants}>
                {p}
              </Affixable>
            ))}

            {child}

            {suffix?.map((s, i) => (
              <Affixable key={i} variants={badgeAffixVariants}>
                {s}
              </Affixable>
            ))}
          </>
        )}
      </Slottable>
    </Component>
  )
}

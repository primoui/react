"use client"

import { Slot } from "@radix-ui/react-slot"
import type { ButtonHTMLAttributes, ReactNode } from "react"

import type { VariantProps } from "../../shared"
import { cx, isReactElement } from "../../shared"
import { Affixable } from "../../utils/Affixable"
import { Slottable } from "../../utils/Slottable"

import { actionAffixVariants, actionVariants } from "./Action.variants"

export type ActionProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "prefix"> &
  VariantProps<typeof actionVariants> & {
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

export const Action = ({
  children,
  className,
  asChild = false,
  prefix: propPrefix,
  suffix: propSuffix,
  ...rest
}: ActionProps) => {
  const useAsChild = asChild && isReactElement(children)
  const Component = useAsChild ? Slot : "button"

  const prefix = propPrefix ? [propPrefix].flat() : []
  const suffix = propSuffix ? [propSuffix].flat() : []

  return (
    <Component className={cx(actionVariants({ className }))} {...rest}>
      <Slottable child={children} asChild={asChild}>
        {child => (
          <>
            {prefix?.map((p, i) => (
              <Affixable key={i} variants={actionAffixVariants}>
                {p}
              </Affixable>
            ))}

            {child}

            {suffix?.map((s, i) => (
              <Affixable key={i} variants={actionAffixVariants}>
                {s}
              </Affixable>
            ))}
          </>
        )}
      </Slottable>
    </Component>
  )
}

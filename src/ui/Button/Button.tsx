"use client"

import { Slot } from "@radix-ui/react-slot"
import { Loader2 } from "lucide-react"
import type { ButtonHTMLAttributes, ReactNode } from "react"
import { forwardRef } from "react"

import { type VariantProps, cx, isChildrenEmpty, isReactElement } from "../../shared"
import { Affixable } from "../../utils/Affixable"
import { Slottable } from "../../utils/Slottable"

import { buttonAffixVariants, buttonVariants } from "./Button.variants"

export type ButtonElement = HTMLButtonElement

export type ButtonProps = Omit<ButtonHTMLAttributes<ButtonElement>, "size" | "prefix"> &
  Omit<VariantProps<typeof buttonVariants>, "isAffixOnly"> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean

    /**
     * If set to `true`, the button will be rendered in the pending state.
     */
    isPending?: boolean

    /**
     * The slot to be rendered before the label.
     */
    prefix?: ReactNode

    /**
     * The slot to be rendered after the label.
     */
    suffix?: ReactNode
  }

export const Button = forwardRef<ButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled,
      asChild = false,
      isPending,
      prefix,
      suffix,
      theme = "primary",
      variant = "solid",
      size = "lg",
      type = "button",
      ...rest
    },
    ref,
  ) => {
    const useAsChild = asChild && isReactElement(children)
    const Component = useAsChild ? Slot : "button"

    // Determine if the button has affix only.
    const isAffixOnly = isChildrenEmpty(children) && (!prefix || !suffix)

    return (
      <Component
        ref={ref}
        disabled={disabled ?? isPending}
        className={cx(buttonVariants({ theme, variant, size, isAffixOnly, isPending, className }))}
        type={type}
        {...rest}
      >
        <Slottable child={children} asChild={asChild}>
          {child => (
            <>
              <Affixable variants={buttonAffixVariants}>{prefix}</Affixable>
              {!isChildrenEmpty(child) && <span className="truncate">{child}</span>}
              <Affixable variants={buttonAffixVariants}>{suffix}</Affixable>

              {!!isPending && <Loader2 className="absolute" />}
            </>
          )}
        </Slottable>
      </Component>
    )
  },
)

Button.displayName = "Button"

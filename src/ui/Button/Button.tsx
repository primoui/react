"use client"

import { Slot } from "@radix-ui/react-slot"
import { Loader2 } from "lucide-react"
import type { ButtonHTMLAttributes, ReactNode } from "react"
import { type VariantProps, cx } from "~/shared/cva"
import { isChildrenEmpty, isReactElement, toArrayOrWrap } from "~/shared/helpers"
import { Affixable } from "~/utils/Affixable/Affixable"
import { Slottable } from "~/utils/Slottable/Slottable"
import { buttonAffixVariants, buttonVariants } from "./Button.variants"

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size" | "prefix"> &
  VariantProps<typeof buttonVariants> & {
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
     * If set to `true`, the element will be rendered in the pending state.
     */
    isPending?: boolean
  }

const Button = ({
  children,
  className,
  asChild = false,
  prefix: propPrefix,
  suffix: propSuffix,
  isPending = false,
  theme = "primary",
  size = "md",
  ...props
}: ButtonProps) => {
  const useAsChild = asChild && isReactElement(children)
  const Component = useAsChild ? Slot : "button"

  const prefix = toArrayOrWrap(propPrefix)
  const suffix = toArrayOrWrap(propSuffix)

  if (isPending) {
    suffix.push(<Loader2 className="text-xs" />)
  }

  return (
    <Component className={cx(buttonVariants({ theme, size, className }))} {...props}>
      <Slottable child={children} asChild={asChild}>
        {child => (
          <>
            {prefix?.map((p, i) => (
              <Affixable key={i} variants={buttonAffixVariants}>
                {p}
              </Affixable>
            ))}

            {!isChildrenEmpty(child) && <span className="flex-1 truncate">{child}</span>}

            {suffix?.map((s, i) => (
              <Affixable key={i} variants={buttonAffixVariants}>
                {s}
              </Affixable>
            ))}
          </>
        )}
      </Slottable>
    </Component>
  )
}

export { Button }

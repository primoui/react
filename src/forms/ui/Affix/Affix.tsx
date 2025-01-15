"use client"

import type { InputHTMLAttributes, ReactNode } from "react"
import { useEffect, useRef, useState } from "react"
import { type VariantProps, cx } from "~/shared/cva"
import { getElementWidth } from "~/shared/helpers"
import { createSimpleContext } from "~/shared/providers"
import { Affixable } from "~/utils/Affixable/Affixable"

import { affixGroupVariants, affixVariants } from "./Affix.variants"

export type AffixContext = {
  prefixWidth?: number
  suffixWidth?: number
}

const AffixContext = createSimpleContext<AffixContext>("Affix")

export type AffixProps = Omit<InputHTMLAttributes<HTMLInputElement>, "prefix"> &
  VariantProps<typeof affixGroupVariants> &
  VariantProps<typeof affixVariants> & {
    /**
     * The slot to be rendered before the label.
     */
    prefix?: ReactNode

    /**
     * The slot to be rendered after the label.
     */
    suffix?: ReactNode
  }

export const Affix = (props: AffixProps) => {
  const { children, className, prefix, suffix, ...rest } = props
  const [prefixWidth, setPrefixWidth] = useState<number>()
  const [suffixWidth, setSuffixWidth] = useState<number>()
  const prefixRef = useRef<HTMLElement>(null)
  const suffixRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setPrefixWidth(getElementWidth(prefixRef.current, true))
    setSuffixWidth(getElementWidth(suffixRef.current, true))
  }, [])

  if (!prefix && !suffix) {
    return <>{children}</>
  }

  return (
    <AffixContext.Provider value={{ prefixWidth, suffixWidth }}>
      <div className={cx(affixGroupVariants({ className }))} {...rest}>
        <Affixable variants={affixVariants}>{prefix}</Affixable>

        {children}

        <Affixable variants={affixVariants}>{suffix}</Affixable>
      </div>
    </AffixContext.Provider>
  )
}

export const useAffix = AffixContext.useValue

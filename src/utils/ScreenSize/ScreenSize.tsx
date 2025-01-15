"use client"

import type { HTMLAttributes } from "react"
import { useEffect, useState } from "react"

import { type VariantProps, cx } from "~/shared/cva"

import { screenSizeSeparatorVariants, screenSizeVariants } from "./ScreenSize.variants"

export type ScreenSizeProps = Omit<HTMLAttributes<HTMLDivElement>, "size"> &
  VariantProps<typeof screenSizeVariants>

export const ScreenSize = ({ className, position, ...rest }: ScreenSizeProps) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  const { width, height } = dimensions

  return (
    <div className={cx(screenSizeVariants({ position, className }))} {...rest}>
      <span>
        {width.toLocaleString()} x {height.toLocaleString()}
      </span>

      <div className={cx(screenSizeSeparatorVariants())} />
      <span className="sm:hidden">XS</span>
      <span className="hidden sm:max-md:inline">SM</span>
      <span className="hidden md:max-lg:inline">MD</span>
      <span className="hidden lg:max-xl:inline">LG</span>
      <span className="hidden xl:max-2xl:inline">XL</span>
      <span className="max-2xl:hidden">2XL</span>
    </div>
  )
}

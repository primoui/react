"use client"

import type { ReactNode } from "react"
import { cloneElement } from "react"
import { isReactElement } from "~/shared/helpers"

export type SlottableProps = {
  asChild?: boolean
  child?: ReactNode
  children: (child: ReactNode) => ReactNode
}

export const Slottable = ({ asChild, child, children, ...rest }: SlottableProps) => {
  if (!asChild) {
    return children(child)
  }

  if (!isReactElement(child)) {
    return null
  }

  // @ts-expect-error
  return cloneElement(child, { ...rest }, children(child.props?.children))
}

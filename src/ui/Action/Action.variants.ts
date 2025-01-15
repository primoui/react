import { activeClasses, disabledClasses, focusClasses } from "~/shared/classes"
import { cva } from "~/shared/cva"

export const actionVariants = cva({
  base: [
    "relative inline-flex items-center justify-center gap-[0.5ch] text-2xs text-gray-500 font-medium leading-icon hover:z-10 hover:text-gray-800",
    disabledClasses,
    activeClasses,
    focusClasses,
  ],

  variants: {
    isPending: {
      true: "[&>*:not(.animate-spin)]:text-transparent select-none",
    },
  },
})

export const actionAffixVariants = cva({
  base: "shrink-0 first:-ml-[0.21425em] last:-mr-[0.21425em] only:m-0",
})

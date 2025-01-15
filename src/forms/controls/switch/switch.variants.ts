import { disabledClasses, focusClasses } from "~/shared/classes"
import { cva } from "~/shared/cva"

export const switchVariants = cva({
  base: [
    "peer relative inline-flex w-7 shrink-0 rounded-full shadow-inner shadow-black/20",
    "data-[state=checked]:bg-primary data-[state=unchecked]:bg-gray-200",
    disabledClasses,
    focusClasses,
  ],

  variants: {
    error: {
      true: "ring-1 ring-offset-1 ring-red",
    },
  },
})

export const switchThumbVariants = cva({
  base: [
    "size-3 m-0.5 border-4 border-white rounded-full shadow-sm shadow-black/20 bg-gray-200 transition",
    "data-[state=checked]:translate-x-3 data-[state=checked]:bg-primary",
  ],
})

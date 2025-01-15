import { cva } from "~/shared/cva"

export const screenSizeVariants = cva({
  base: "fixed bottom-5 z-50 flex items-center gap-2 py-1 px-2.5 bg-white border rounded font-mono text-xs font-medium",

  variants: {
    position: {
      left: "left-5",
      center: "left-1/2 -translate-x-1/2",
      right: "right-5",
    },
  },

  defaultVariants: {
    position: "center",
  },
})

export const screenSizeSeparatorVariants = cva({
  base: "h-4 w-px bg-current opacity-25",
})

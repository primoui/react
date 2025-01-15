import { cva } from "~/shared/cva"

export const labelVariants = cva({
  base: "text-sm font-medium text-gray-700 [&[for]]:cursor-pointer",

  variants: {
    isRequired: {
      true: "after:ml-0.5 after:text-red after:content-['*']",
    },
  },
})

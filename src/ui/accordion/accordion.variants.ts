import { cva } from "~/shared/cva"

export const accordionVariants = cva({
  base: [
    "overflow-hidden transition-all !duration-200",
    "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
  ],
})

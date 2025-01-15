"use client"

import { Slot } from "@radix-ui/react-slot"
import { type VariantProps, cx } from "cva"

import { X } from "lucide-react"
import {
  type ComponentProps,
  type HTMLAttributes,
  type MouseEventHandler,
  type ReactNode,
  useCallback,
  useState,
} from "react"
import { isReactElement } from "~/shared/helpers"
import { Action } from "~/ui/Action"
import type { Button } from "~/ui/Button"
import { Affixable } from "~/utils/Affixable/Affixable"
import {
  alertAffixVariants,
  alertRootVariants,
  alertTitleVariants,
  alertVariants,
} from "./Alert.variants"

type ClosableProps = {
  /**
   * Is the alert closable? If true, a close icon will be displayed.
   * @default true
   */
  closable: true

  /**
   * An optional callback function to be called when the close icon is clicked.
   * This can be used to handle the removal of the tag.
   * If provided, the close icon will be displayed.
   */
  onClose?: MouseEventHandler<HTMLButtonElement>
}

type NotClosableProps = {
  /**
   * Is the alert closable? If true, a close button will be displayed and
   * when clicked on it will hide the alert element
   * @default true
   */
  closable?: false

  /**
   * An optional callback function to be called when the close button is clicked.
   * Requires the `closable` prop to be set to `true`.
   */
  onClose?: never
}

export type AlertProps = Omit<HTMLAttributes<HTMLDivElement>, "title" | "prefix"> &
  VariantProps<typeof alertVariants> & {
    /**
     * The slot to be rendered prefix the description.
     * This can be used to render an icon
     * or any other element prefix the description. Also accepts a string,
     * number, or any valid React element.
     * If omitted, it will not be displayed.
     *
     * @example
     * // Display an alert with icon
     * <Alert prefix={<SuccessIcon />} />
     */
    prefix?: ReactNode

    /**
     * The slot to be rendered suffix the description.
     * This can be a string, number or any valid React element.
     * If omitted, it will not be displayed.
     *
     * @example
     * // Display an alert with button
     * <Alert suffix={<Button size="sm">Save</Button>} />
     */
    suffix?: ReactNode

    /**
     * The title to display within the Alert component.
     * This can be a string, number or any valid React element.
     * If omitted, no title will be displayed.
     * If a string is provided, it will be wrapped in an <AlertTitle /> component.
     * If a React element is provided, it will be rendered as-is.
     */
    title?: ReactNode
  } & (ClosableProps | NotClosableProps)

export const AlertBase = ({
  className,
  suffix,
  prefix,
  closable,
  theme,
  variant = "inline",
  children,
  title,
  onClose,
  ...props
}: AlertProps) => {
  const [visible, setVisible] = useState(true)

  /**
   * Handle the close event.
   * @param event - The event object
   */
  const handleClose = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      // Do not close if the event is prevented by the onClose callback
      if (!event.defaultPrevented) {
        setVisible(false)
      }

      if (onClose) {
        onClose(event)
      }
    },
    [onClose],
  )

  if (!visible) {
    return null
  }

  return (
    <AlertRoot className={cx(alertVariants({ variant, theme }), className)} {...props}>
      <Affixable variants={alertAffixVariants}>{prefix}</Affixable>

      <div
        className={cx(
          "flex grow flex-col items-start",
          variant === "expanded" && "items-start gap-3 px-2",
          variant === "inline" && "px-3 sm:flex-row sm:items-center sm:gap-2",
          variant === "inline" && closable && "pr-1",
        )}
      >
        <div
          className={cx(
            "flex grow flex-col items-start",
            variant === "expanded" && "items-start",
            variant === "inline" && "sm:flex-row sm:items-center sm:gap-2",
          )}
        >
          {title && <AlertTitle theme={theme}>{title}</AlertTitle>}
          {children && <AlertDescription>{children}</AlertDescription>}
        </div>

        <Affixable variants={alertAffixVariants} className="mt-3 sm:ml-auto sm:mt-0">
          {suffix}
        </Affixable>
      </div>

      {closable && (
        <AlertCloseButton className={cx(variant === "inline" && "mr-1")} onClick={handleClose} />
      )}
    </AlertRoot>
  )
}

export const AlertRoot = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cx(alertRootVariants({ className }))} role="alert" {...props}>
      {children}
    </div>
  )
}

export const AlertTitle = ({
  className,
  theme,
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement> & VariantProps<typeof alertTitleVariants>) => {
  const Component = isReactElement(children) ? Slot : "p"

  return (
    <Component className={cx(alertTitleVariants({ theme }), className)} {...props}>
      {children}
    </Component>
  )
}

export const AlertDescription = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) => {
  const Component = isReactElement(children) ? Slot : "p"

  return (
    <Component className={cx("text-start", className)} {...props}>
      {children}
    </Component>
  )
}

export const AlertCloseButton = ({ children, ...props }: ComponentProps<typeof Button>) => {
  const renderCloseIcon = (children: ReactNode) => {
    return isReactElement(children) ? children : <X aria-label="Close" />
  }

  return <Action prefix={renderCloseIcon(children)} {...props} />
}

export const Alert = Object.assign(AlertBase, {
  Root: AlertRoot,
  CloseButton: AlertCloseButton,
  Description: AlertDescription,
  Title: AlertTitle,
})

"use client"

import { Trash } from "lucide-react"
import type { ChangeEvent, ComponentProps, MouseEventHandler } from "react"
import { useRef } from "react"
import { Button } from "~/ui/Button"
import { ButtonGroup } from "~/ui/ButtonGroup"
import { Stack } from "~/ui/Stack"

export type UploaderProps = Omit<ComponentProps<typeof Stack>, "onChange"> & {
  /**
   * The label for the input
   */
  label?: string

  /**
   * The file types that the input should accept
   */
  accept?: string[]

  /**
   * Whether the uploader is in a pending state
   */
  isPending?: boolean

  /**
   * Callback for when the value changes
   */
  onChange: (file: File) => void

  /**
   * Callback for when the clear button is clicked
   */
  onClear?: () => void
}

export const Uploader = ({
  children,
  className,
  label = "Upload",
  accept = ["image/*"],
  isPending = false,
  onChange,
  onClear,
  ...rest
}: UploaderProps) => {
  const uploadRef = useRef<HTMLInputElement | null>(null)

  const onClick: MouseEventHandler<HTMLButtonElement> = () => {
    uploadRef.current?.click()
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      onChange(e.target.files[0])
    }

    // Reset input value
    e.target.value = ""
  }

  return (
    <Stack {...rest}>
      {children}

      <input
        type="file"
        ref={uploadRef}
        onChange={onInputChange}
        accept={accept?.join(",")}
        className="hidden"
      />

      <ButtonGroup className="shrink-0">
        <Button
          type="button"
          theme="secondary"
          variant="outline"
          onClick={onClick}
          isPending={isPending}
        >
          {label}
        </Button>

        {onClear && (
          <Button
            type="button"
            theme="negative"
            variant="outline"
            prefix={<Trash />}
            onClick={onClear}
          />
        )}
      </ButtonGroup>
    </Stack>
  )
}

'use client'
import React, { ComponentProps } from 'react'

type TextAreaProps = ComponentProps<'textarea'>

export const TextArea: React.FC<TextAreaProps> = (props) => {
  return (
    <textarea
      {...props}
      maxLength={250}
      className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
    />
  )
}

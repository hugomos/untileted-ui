'use client'

import * as Select from '@radix-ui/react-select'
import { Check } from 'lucide-react'
import React from 'react'

interface SelectItemProps extends Select.SelectItemProps {
  value: string
  text: string
}

export const SelectItem: React.FC<SelectItemProps> = ({
  value,
  text,
  ...props
}) => {
  return (
    <Select.Item
      {...props}
      className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-100"
      value={value}
    >
      <Select.ItemText className="text-black">{text}</Select.ItemText>
      <Select.ItemIndicator>
        <Check className="h-4 w-4 text-violet-500" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}

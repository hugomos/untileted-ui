import React, { ComponentProps } from 'react'

type InputPrefixProps = ComponentProps<'div'>

const Prefix: React.FC<InputPrefixProps> = (props) => {
  return <div className="flex-shrink" {...props}></div>
}

type InputControlProps = ComponentProps<'input'>

const Control: React.FC<InputControlProps> = ({ placeholder, ...props }) => {
  return (
    <input
      type="text"
      className="max-w-full flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 "
      placeholder={placeholder}
      {...props}
    />
  )
}

type InputRootProps = ComponentProps<'div'>

const Root: React.FC<InputRootProps> = (props) => {
  return (
    <div
      className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  )
}

export { Control, Prefix, Root }

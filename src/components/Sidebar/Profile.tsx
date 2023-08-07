/* eslint-disable @next/next/no-img-element */
import { LogOut } from 'lucide-react'
import React from 'react'

export const Profile: React.FC = () => {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/hugomos.png"
        alt=""
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Vitor Oliveira
        </span>
        <span className="truncate text-sm text-zinc-500">
          vitor_osantos@athenasagricola.com.br
        </span>
      </div>
      <button
        type="button"
        className="ml-auto rounded-md p-2 hover:bg-zinc-100"
      >
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}

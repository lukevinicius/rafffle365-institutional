import { HTMLAttributes, ReactNode } from 'react'

interface FieldProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Field(props: FieldProps) {
  return <div className="flex flex-col gap-1" {...props} />
}

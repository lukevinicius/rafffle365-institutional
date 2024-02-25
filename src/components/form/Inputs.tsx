import { InputHTMLAttributes } from 'react'
import CurrencyInput from 'react-currency-input-field'
import { useFormContext } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export function Input(props: InputProps) {
  const { register } = useFormContext()

  return (
    <input
      id={props.name}
      className="flex-1 rounded border border-zinc-300 px-3 py-2 text-zinc-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
      {...register(props.name)}
      {...props}
    />
  )
}

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string
}

export function TextArea(props: TextAreaProps) {
  const { register } = useFormContext()

  return (
    <textarea
      id={props.name}
      className="flex-1 rounded border border-zinc-300 px-3 py-2 text-zinc-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
      {...register(props.name)}
      {...props}
    />
  )
}

interface CurrencyInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export function MoneyInput(props: CurrencyInputProps) {
  const { register } = useFormContext()

  return (
    <CurrencyInput
      {...register(props.name)}
      id={props.name}
      className="flex-1 rounded border border-zinc-300 px-3 py-2 text-zinc-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-600"
      {...props}
      defaultValue={0}
      step={0.01}
      decimalsLimit={2}
    />
  )
}

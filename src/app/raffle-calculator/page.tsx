'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { MessageCircleMore } from 'lucide-react'
import { IResult, Result } from './result'
import { CaclulatorForm } from './calculator-form'

export default function CalculatorRaffle() {
  const [results, setResults] = useState<IResult[]>([])

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-center"></div>
      <div className="text-center text-3xl font-bold">
        <p>CALCULADORA DOS LUCROS DE UMA </p>
        <p className="bg-orange-600 text-5xl">RIFA ONLINE</p>
      </div>
      <div className="text-center">
        <p>
          Quer aprender{' '}
          <strong className="text-green-500">Como Faturar Alto</strong> fazendo{' '}
          <strong className="text-green-500">Rifas na Internet?</strong>
        </p>
        <p>
          <strong className="text-green-500">Clique</strong> no Botão Abaixo e
          fale agora e tire todas as suas dúvidas com um dos{' '}
          <strong className="text-green-500">Especialistas</strong> do nosso
          time de atendimento!
        </p>
        <Button
          className="mt-3 space-x-1 bg-green-500 hover:bg-green-600"
          size="lg"
        >
          <MessageCircleMore size={30} />{' '}
          <span className="font-bold md:text-xl">
            Falar com um de nossos especialista
          </span>
        </Button>
      </div>
      <p className="text-center text-2xl font-bold">
        PREENCHA OS DADOS ABAIXO E DESCUBRA O SEU LUCRO
      </p>
      <CaclulatorForm setResults={setResults} />
      {results.length > 0 && <Result result={results} />}
    </div>
  )
}

import { Coins } from 'lucide-react'

export interface IResult {
  totalSales: number
  quotasQty: number
  pricePerQuota: number
}

interface ResultProps {
  result: IResult[]
}

export function Result({ result }: ResultProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-5">
      <div className="max-w-lg space-y-3 text-center">
        <p className="font-bold">Sua meta de vendas minima é de</p>
        <p className="rounded-xl bg-orange-500 p-2 text-2xl font-bold">
          {result[0].totalSales.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
        <p className="font-semibold">
          VEJA ABAIXO AS MELHORES ESTRATÉGIAS PARA ESCALAR SEUS LUCROS COM SUA
          RIFA ONLINE
        </p>
      </div>
      <div className="grid items-center justify-center gap-3 md:grid-cols-3">
        {result.map((result, index) => (
          <div
            key={index}
            className="max-w-xs space-y-3 rounded-xl bg-zinc-700 p-3"
          >
            <div className="flex items-center justify-around">
              <Coins size={40} className="text-yellow-400" />
              <div className="space-y-3 text-xl font-bold">
                <p>
                  Sorteio com{' '}
                  <span className="rounded-lg bg-orange-500 p-1">
                    {result.quotasQty.toLocaleString('pt-BR')} cotas
                  </span>
                </p>
                <p>
                  Vendendo a{' '}
                  <span className="rounded-lg bg-orange-500 p-1">
                    {result.pricePerQuota.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </span>
                </p>
              </div>
            </div>
            <p className="font-semibold">
              Seu faturamento nessa ação:{' '}
              <p className="font-bold">
                {result.totalSales.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </p>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

import z from 'zod'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { Form } from '@/components/form'
import { IResult } from './result'

const calculateRaffleSchema = z.object({
  prize: z.string(),
  investiment: z.string(),
  profit: z.string(),
})

type calculateRaffleData = z.infer<typeof calculateRaffleSchema>

interface CaclulatorFormProps {
  setResults: (results: IResult[]) => void
}

export function CaclulatorForm({ setResults }: CaclulatorFormProps) {
  const calculateRaffleForm = useForm<calculateRaffleData>({
    resolver: zodResolver(calculateRaffleSchema),
  })

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = calculateRaffleForm

  const handleCalculateRaffle: SubmitHandler<calculateRaffleData> = async (
    data,
  ) => {
    const qtyNumbers = [50, 100, 150, 300, 500, 1000, 10000, 100000, 1000000]

    const investiment = Number(
      data.investiment.replace('R$ ', '').replace(',', ''),
    )
    const prize = Number(data.prize.replace('R$ ', '').replace(',', ''))
    const profit = Number(data.profit.replace('R$ ', '').replace(',', ''))

    const totalSales = investiment + prize + profit

    const resultsCalc: IResult[] = qtyNumbers.map((qty) => {
      const pricePerQuota = totalSales / qty

      return {
        totalSales,
        quotasQty: qty,
        pricePerQuota,
      }
    })

    setResults(resultsCalc)
  }
  return (
    <div className="flex items-center justify-center">
      <FormProvider {...calculateRaffleForm}>
        <form
          className="max-w-sm space-y-5"
          onSubmit={handleSubmit(handleCalculateRaffle)}
        >
          <div className="flex flex-col space-y-5">
            <Form.Field>
              <Form.Label htmlFor="prize">Valor do Prêmio</Form.Label>
              <Form.MoneyInput name="prize" prefix="R$ " />
              <Form.ErrorMessage field="prize" />
            </Form.Field>
            <Form.Field>
              <Form.Label htmlFor="investiment">
                Qual será o valor do investimento em anúncios?
              </Form.Label>
              <Form.MoneyInput name="investiment" prefix="R$ " />
              <Form.ErrorMessage field="investiment" />
            </Form.Field>
            <Form.Field>
              <Form.Label htmlFor="profit">O Lucro que você deseja</Form.Label>
              <Form.MoneyInput name="profit" prefix="R$ " />
              <Form.ErrorMessage field="profit" />
            </Form.Field>
          </div>
          <div className="flex justify-center">
            <Button className="bg-blue-500 hover:bg-blue-600">
              {isSubmitting ? (
                <Loader2 className="animate-spin" />
              ) : (
                'Ver Estratégias de Lucro'
              )}
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

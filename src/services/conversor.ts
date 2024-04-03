import { getExchangeRates } from './api/apiConversor'

export async function convertCurrency (
  amount: number,
  from: string,
  to: string
): Promise<number> {
  const rates = await getExchangeRates(from)
  const rate = rates.rates[to]
  return amount * rate
}

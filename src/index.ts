import { convertCurrency } from './services/conversor'

async function main () {
  const amount = 100
  const from = 'USD'
  const to = 'BRL'
  const convertedAmount = await convertCurrency(amount, from, to)
  console.log(`R$ ${convertedAmount.toFixed(2)}`)
}

main()

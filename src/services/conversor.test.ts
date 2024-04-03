import { describe, expect, it } from '@jest/globals'
import { getExchangeRates } from './api/apiConversor'
import { convertCurrency } from './conversor'
import { ApiResponse } from './interfaces/conversorInterface'

jest.mock('axios', () => {
  return {
    get: jest.fn(() => Promise.resolve({
      data: {
        rates: {
          BRL: 5.0
        },
        base: 'USD',
        date: '2024-04-03'
      } as ApiResponse
    }))
  }
})

describe('getExchangeRates', () => {
  it('deve retornar as taxas de câmbio para a moeda base', async () => {
    const base = 'USD'
    const rates = await getExchangeRates(base)
    expect(rates).toBeDefined()
    expect(rates.rates).toBeDefined()
    expect(rates.base).toBe(base)
  })
})

describe("Conversor de Moedas", () => {
  it("deve converter a quantia para a moeda de destino", async () => {
    const amount = 100
    const from = "USD"
    const to = "BRL"
    const convertedAmount = await convertCurrency(amount, from, to)
    expect(convertedAmount).toBeGreaterThan(0)
  })
})

describe('Conversor de Moedas', () => {
  it('deve converter a quantia para a moeda de destino', async () => {
    const amount = 100
    const from = 'USD'
    const to = 'BRL'
    const convertedAmount = await convertCurrency(amount, from, to)
    expect(convertedAmount).toBeGreaterThan(0)
  })
})


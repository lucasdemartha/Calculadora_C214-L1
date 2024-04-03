import axios from 'axios'
import { ApiResponse } from '../interfaces/conversorInterface'

const API_URL = 'https://api.exchangerate-api.com/v4/latest'

export async function getExchangeRates (base: string): Promise<ApiResponse> {
  const response = await axios.get(`${API_URL}/${base}`)
  return response.data as ApiResponse
}

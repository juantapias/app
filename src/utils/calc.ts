import { Product } from './types'

export const totalPay = (products: Product[]) => {
  let total: number = 0

  total =
    total +
    products
      .map((product) => Number(product.price || 0) * (product.quantity || 0))
      .reduce((prev, next) => prev + next, 0)

  return total
}

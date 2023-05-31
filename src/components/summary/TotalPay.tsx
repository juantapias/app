'use client'

import { useState } from 'react'

import { Product } from '../../utils/types'
import { totalPay } from '../../utils/calc'
import { useAppStateContext } from '../../context/AppStateContext'
import { whatsAppOrder } from '../../helpers'

type ITotalPay = {
  products: Product[]
}

export default function TotalPay ({ products }: ITotalPay) {
  const { clearCart } = useAppStateContext()
  const [order] = useState<string[]>([])

  const handleMakeOrder = () => {
    products.forEach(product => {
      order?.push(`${product.name} x${product.quantity} -> $${product.price}`)
    })

    whatsAppOrder(order, products)
    clearCart()
  }

  return (
    <div className='border-t border-gray-100'>
      <div className='flex items-center justify-between mt-4'>
        <h5>${totalPay(products)}</h5>
        <button
          className='btn-md bg-red-400 rounded-full'
          onClick={handleMakeOrder}
        >
          Ordenar
        </button>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'

import { Product } from '../../utils/types'
import { totalPay } from '../../utils/calc'
import { useAppStateContext } from '@/context/AppStateContext'

type ITotalPay = {
  products: Product[]
}

export default function TotalPay ({ products }: ITotalPay) {
  const { clearCart } = useAppStateContext()
  const [order] = useState<string[]>([])

  const handleMakeOrder = () => {
    const whatsapp: number = +573002964590

    products.forEach(element => {
      order?.push(`${element.name} x${element.quantity} -> $${element.price}`)
    })

    const orderStructure = order.toString().replace(',', '\n')

    const body = encodeURIComponent(orderStructure)

    window.location.href = `https://wa.me/${whatsapp}?text=${body}`
    clearCart
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

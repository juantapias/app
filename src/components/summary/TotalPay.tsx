'use client'

import { useState } from 'react'

import { Product } from '../../utils/types'
import { totalPay } from '../../utils/calc'
import { useAppStateContext } from '../../context/AppStateContext'
import { whatsAppOrder } from '../../helpers'
import { CgSpinner } from 'react-icons/cg'

type ITotalPay = {
  products: Product[]
}

export default function TotalPay ({ products }: ITotalPay) {
  const { clearCart } = useAppStateContext()

  const [order] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const handleMakeOrder = () => {
    setIsSubmitting(true)
    products.forEach(product => {
      order?.push(`${product.name} x${product.quantity} -> $${product.price}`)
    })

    whatsAppOrder(order, products)
    setIsSubmitting(false)
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
          {!isSubmitting ? (
            'Ordenar'
          ) : (
            <CgSpinner className='animate-spin' size={20} />
          )}
        </button>
      </div>
    </div>
  )
}

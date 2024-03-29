'use client'

import React from 'react'

import { useAppStateContext } from '@/context/AppStateContext'
import { Product } from '@/utils/types'

import { IconTrash } from '@tabler/icons-react'
import TotalPay from '../summary/TotalPay'
import ProductSummary from '../summary/ProductSummary'
import EmptySearch from './EmptySearch'

type ISummary = {
  products: Product[]
}

export default function Summary ({ products }: ISummary) {
  const { cart, clearCart } = useAppStateContext()
  return (
    <section className='summary'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-rows-1'>
          <div className='grid grid-cols-1 gap-4'>
            {cart.length > 0 ? (
              <div className='bg-white rounded-3xl p-4 space-y-5'>
                <div className='flex justify-end'>
                  <button onClick={clearCart}>
                    <IconTrash size={20} />
                  </button>
                </div>

                <ProductSummary products={products} />
                <TotalPay products={products} />
              </div>
            ) : (
              <EmptySearch title='El carrito está vacío' description='Agrega a tu carrito los artículos que deseas pedir'  goHome />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

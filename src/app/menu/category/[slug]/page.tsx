'use client'

import React, { Fragment } from 'react'
import { useParams } from 'next/navigation'

import { useAppStateContext } from '@/context/AppStateContext'

import Header from '../../../../components/shared/Header'
import Products from '@/components/shared/Products'


export default function Page () {
  const params = useParams()

  const { categories } = useAppStateContext()

  const productByCategory = categories.filter(c => c.slug === params.slug)[0]
    .products

  return (
    <Fragment>
      <Header title={params.slug} goBack cartBtn />
      <main>
        <section className='products'>
          <div className='container mx-auto px-4'>
            <div className='grid grid-rows-1'>
              <div className='grid grid-cols-1 gap-4'>
                <Products products={productByCategory} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  )
}

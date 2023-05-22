import React, { Fragment } from 'react'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@/components/shared/Header'))
const CategoriesScroll = dynamic(
  () => import('@/components/shared/CategoriesScroll')
)
const Products = dynamic(() => import('@/components/shared/Products'))

import CategoriesData from '@/data/categories.json'
import ProductsData from '@/data/products.json'

export default function Page () {
  return (
    <Fragment>
      <Header title='Menú' search />
      <main className='space-y-5'>
        <CategoriesScroll categories={CategoriesData} />
        <Products products={ProductsData} />
      </main>
    </Fragment>
  )
}

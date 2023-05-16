import React, { Fragment } from 'react'

import Header from '@/components/shared/Header'
import CategoriesScroll from '@/components/shared/CategoriesScroll'
import Products from '@/components/shared/Products'

import CategoriesData from '@/data/categories.json'
import ProductsData from '@/data/products.json'

export default function Menu () {
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

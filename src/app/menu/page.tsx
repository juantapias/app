'use client'

import React, { Fragment } from 'react'

import { useAppStateContext } from '../../context/AppStateContext'
import { useProducts } from '../../hooks'

import Header from '../../components/shared/Header'
import CategoriesScroll from '../../components/shared/CategoriesScroll'
import Products from '../../components/shared/Products'

import CategoriesData from '../../data/categories.json'

export default function Page () {
  const { setIsServices, setInRestaurant, products } = useAppStateContext()

  const productQuery = useProducts()

  return (
    <Fragment>
      <Header title='Menú' cartBtn />
      <main className='space-y-5'>
        <CategoriesScroll categories={CategoriesData} />
        <Products products={products} loading={productQuery.isFetching} />
      </main>
    </Fragment>
  )
}

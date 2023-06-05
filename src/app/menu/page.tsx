'use client'

import React, { Fragment } from 'react'

import { useAppStateContext } from '../../context/AppStateContext'
import { useCategories, useProducts } from '../../hooks'

import Header from '../../components/shared/Header'
import CategoriesScroll from '../../components/shared/CategoriesScroll'
import Products from '../../components/shared/Products'

export default function Page () {
  const { setIsServices, setInRestaurant, products, categories } =
    useAppStateContext()

  const categoryQuery = useCategories()
  const productQuery = useProducts()

  return (
    <Fragment>
      <Header title='Menú' cartBtn />
      <main className='space-y-5'>
        <CategoriesScroll
          categories={categories}
          loading={categoryQuery.isFetching}
        />
        <Products products={products} loading={productQuery.isFetching} />
      </main>
    </Fragment>
  )
}

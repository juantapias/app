'use client'

import React, { Fragment, useEffect } from 'react'

import { useAppStateContext } from '../../context/AppStateContext'
import { useProducts } from '../../hooks'

import Header from '../../components/shared/Header'
import CategoriesScroll from '../../components/shared/CategoriesScroll'
import Products from '../../components/shared/Products'

import CategoriesData from '../../data/categories.json'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function Page ({ searchParams }: Props) {
  const { setIsServices, setInRestaurant, products } =
    useAppStateContext()

  const productQuery = useProducts()

  useEffect(() => {
    if (searchParams.key === 'inrestaurant') {
      setIsServices(true), setInRestaurant(true)
    }
  }, [searchParams])

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

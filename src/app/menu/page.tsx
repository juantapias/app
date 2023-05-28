'use client'

import React, { Fragment, useEffect } from 'react'

import { useAppStateContext } from '../../context/AppStateContext'

import Header from '../../components/shared/Header'
import CategoriesScroll from '../../components/shared/CategoriesScroll'
import Products from '../../components/shared/Products'

import CategoriesData from '../../data/categories.json'
import ProductsData from '../../data/products.json'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function Page ({ searchParams }: Props) {
  const { setIsServices, setInRestaurant } = useAppStateContext()

  useEffect(() => {
    if (searchParams.key === 'inrestaurant')
      setIsServices(true), setInRestaurant(true)
  }, [])

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

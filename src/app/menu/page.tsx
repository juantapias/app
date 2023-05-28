'use client'

import React, { Fragment, useEffect } from 'react'

import { useQuery } from '@tanstack/react-query'
import { useProducts } from '@/hooks'

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
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['products'],
    queryFn: useProducts
  })
  console.log('🚀 ~ file: page.tsx:26 ~ Page ~ isLoading:', isLoading)

  const { setIsServices, setInRestaurant } = useAppStateContext()

  useEffect(() => {
    if (searchParams.key === 'inrestaurant') {
      setIsServices(true), setInRestaurant(true)
    }
  }, [searchParams])

  return (
    <Fragment>
      <Header title='Menú' search />
      <main className='space-y-5'>
        <CategoriesScroll categories={CategoriesData} />
        <Products products={data} loading={isLoading} />
      </main>
    </Fragment>
  )
}

'use client'

import React, { Fragment, useEffect } from 'react'
import { useParams, usePathname, useSearchParams } from 'next/navigation'

import Header from '../../components/shared/Header'
import CategoriesScroll from '../../components/shared/CategoriesScroll'

import Products from '../../components/shared/Products'

import CategoriesData from '../../data/categories.json'
import ProductsData from '../../data/products.json'
import { useAppStateContext } from '@/context/AppStateContext'

export default function Page () {
  const router = usePathname()

  const { setIsServices } = useAppStateContext()

  useEffect(() => {
    if (router.includes('menu')) setIsServices(true)
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

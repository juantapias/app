'use client'

import React, { Fragment, useState } from 'react'

import { useAppStateContext } from '@/context/AppStateContext'
import { useProducts } from '../../hooks'

import Header from '../../components/shared/Header'
import SearchForm from '../../components/forms/SearchForm'
import ResultFilter from '../../components/shared/ResultFilter'

export default function Page () {
  const { products } = useAppStateContext()
  const productQuery = useProducts()

  const [queryFilter, setQueryFilter] = useState<string>('')
  console.log('🚀 ~ file: page.tsx:17 ~ Page ~ queryFilter:', queryFilter)

  const searchFilterProducts =
    queryFilter === ''
      ? products
      : products.filter(product =>
          product.name
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .includes(queryFilter.toLowerCase().replace(/[\u0300-\u036f]/g, ''))
        )

  return (
    <Fragment>
      <Header title='Buscar' goBack />
      <main className='space-y-5'>
        <SearchForm dispatchQueryFilter={setQueryFilter} />
        <ResultFilter loading={productQuery.isFetching} products={searchFilterProducts} />
      </main>
    </Fragment>
  )
}

'use client'

import React, { Fragment } from 'react'

import { useAppStateContext } from '@/context/AppStateContext'
import { useCategories } from '@/hooks'

import Header from '../../../components/shared/Header'
import Categories from '../../../components/shared/Categories'

export default function Page () {
  const { categories } = useAppStateContext()

  const CategoryQuery = useCategories()
  return (
    <Fragment>
      <Header title='Categorías' goBack cartBtn />
      <main>
        <Categories categories={categories} loading={CategoryQuery.isFetching} />
      </main>
    </Fragment>
  )
}

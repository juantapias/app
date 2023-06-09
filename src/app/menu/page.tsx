'use client'

import React, { Fragment, useState } from 'react'

import { useAppStateContext } from '../../context/AppStateContext'
import { useCategories } from '../../hooks'

import Header from '../../components/shared/Header'
import SkeletonWrap from '@/components/skeletons/SkeletonWrap'
import CategoriesScroll from '../../components/shared/CategoriesScroll'
import CardCategory from '@/components/articles/CardCategory'
import CategoryGroup from '@/components/shared/CategoryGroup'

export default function Page () {
  const { categories } = useAppStateContext()

  const categoryQuery = useCategories()

  const [filterCategory, setFilterCategory] = useState<string | undefined>('')

  const filterProductByCategory = () => {
    if (filterCategory?.length) {
      return categories.filter(c => c.name === filterCategory)
    } else {
      return categories.filter(c => c)
    }
  }

  return (
    <Fragment>
      <Header title='Menú' cartBtn />
      <main className='space-y-5'>
        <CategoriesScroll
          categories={categories}
          loading={categoryQuery.isFetching}
          filterCategory={filterCategory}
          dispatchFilterCategory={setFilterCategory}
        />
        <CategoryGroup
          categories={filterProductByCategory()}
          loading={categoryQuery.isFetching}
        />
      </main>
    </Fragment>
  )
}

import React, { Fragment } from 'react'

import Header from '@/components/shared/Header'
import Categories from '@/components/shared/Categories'

import CategoriesData from '@/data/categories.json'

export default function Category () {
  return (
    <Fragment>
      <Header title='Categorías' goBack search />
      <main>
        <Categories categories={CategoriesData}/>
      </main>
    </Fragment>
  )
}

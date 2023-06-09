import React from 'react'

import { Category } from '@/utils/types'

import Products from '../shared/Products'

type ICardCategory = {
  loading: boolean
  category: Category
}

export default function CardCategory ({ loading, category }: ICardCategory) {
  return (
    <div className="card-category space-y-2">
      <h1>{category.name}</h1>
      <Products products={category.products} loading={loading} />
    </div>
  )
}

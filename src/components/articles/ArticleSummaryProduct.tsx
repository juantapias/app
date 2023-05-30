import React from 'react'

import { Product } from '../../utils/types'

type IArticleProduct = {
  product: Product
}

export default function ArticleSummaryProduct ({ product }: IArticleProduct) {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center space-x-2'>
        <h1>{product.name}</h1>
        <span className='text-sm text-gray-400'>x{product.quantity}</span>
      </div>
      <span>${product.price}</span>
    </div>
  )
}

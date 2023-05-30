import React from 'react'

import { Product } from '../../utils/types'
import SkeletonWrap from '../skeletons/SkeletonWrap'
import ArticleSummaryProduct from '../articles/ArticleSummaryProduct'

type IProductSummary = {
  products: Product[]
}

export default function ProductSummary ({ products }: IProductSummary) {
  return (
    <div>
      {products.map((product, key) => (
        <SkeletonWrap key={key} loading={false} variant='rounded'>
          <ArticleSummaryProduct product={product} />
        </SkeletonWrap>
      ))}
    </div>
  )
}

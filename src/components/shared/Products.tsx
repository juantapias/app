'use client'

import React, { useState } from 'react'

import { Product } from '../../utils/types'

import SkeletonWrap from '../skeletons/SkeletonWrap'
import ArticleProducts from '../articles/ArticleProducts'
import DetailProduct from './DetailProduct'

type Products = {
  loading?: boolean
  products: Product[] | undefined
}

export default function Products ({ loading, products }: Products) {
  const [selectedProduct, setSelectedProduct] = useState<Product>()
  const [isDetailProduct, setIsDetailProduct] = useState<boolean>(false)
  return (
    <div className='products'>
      <div className='grid grid-rows-1'>
        <div className='grid grid-cols-1 gap-4'>
          {products?.map((product, key) => (
            <SkeletonWrap
              key={key}
              loading={loading}
              variant='rounded'
              height='136px'
            >
              <ArticleProducts
                product={product}
                dispatchSelectedProduct={setSelectedProduct}
                dispatchDetailProduct={setIsDetailProduct}
              />
            </SkeletonWrap>
          ))}
        </div>
      </div>

      <DetailProduct
        isDetailProduct={isDetailProduct}
        product={selectedProduct}
        dispatchSelectedProduct={setSelectedProduct}
        dispatchDetailProduct={setIsDetailProduct}
      />
    </div>
  )
}

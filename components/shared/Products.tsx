'use client'

import React, { useState } from 'react'

import SkeletonWrap from '../skeletons/SkeletonWrap'
import ArticleProducts from '../articles/ArticleProducts'
import DetailProduct from './DetailProduct'

import { IProducts } from '@/utils/types'

type Products = {
  products: IProducts[]
}

export default function Products ({ products }: Products) {
  const [isDetailProduct, setIsDetailProduct] = useState<boolean>(false)
  return (
    <section className='products'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-rows-1'>
          <div className='grid grid-cols-1 gap-4'>
            {products.map((product, key) => (
              <SkeletonWrap
                key={key}
                loading={false}
                variant='rounded'
                height='136px'
              >
                <ArticleProducts
                  product={product}
                  dispatchDetailProduct={setIsDetailProduct}
                />
              </SkeletonWrap>
            ))}
          </div>
        </div>
      </div>

      <DetailProduct
        isDetailProduct={isDetailProduct}
        dispatchDetailProduct={setIsDetailProduct}
      />
    </section>
  )
}

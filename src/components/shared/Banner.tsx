'use client'

import React, { Dispatch, SetStateAction, useState } from 'react'

import DetailProduct from './DetailProduct'

import { Banner, Product } from '../../utils/types'
import ArticleBanner from '../articles/ArticleBanner'
import SkeletonWrap from '../skeletons/SkeletonWrap'

type IBanner = {
  loading: boolean
  banner: Product[]
}

export default function Banner ({ loading, banner }: IBanner) {
  const [selectedProduct, setSelectedProduct] = useState<Product>()
  const [isDetailProduct, setIsDetailProduct] = useState<boolean>(false)

  return (
    <section className='banner'>
      {banner.map((banner, key) => (
        <SkeletonWrap key={key} loading={loading} variant='rounded' height='160px'>
          <ArticleBanner
            banner={banner}
            dispatchSelectedProduct={setSelectedProduct}
            dispatchDetailProduct={setIsDetailProduct}
          />
        </SkeletonWrap>
      ))}

      <DetailProduct
        isDetailProduct={isDetailProduct}
        product={selectedProduct}
        dispatchSelectedProduct={setSelectedProduct}
        dispatchDetailProduct={setIsDetailProduct}
      />
    </section>
  )
}

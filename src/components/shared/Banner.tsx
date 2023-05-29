'use client'

import React, { Dispatch, SetStateAction, useState } from 'react'

import DetailProduct from './DetailProduct'

import { IBanners } from '../../utils/types'
import ArticleBanner from '../articles/ArticleBanner'
import SkeletonWrap from '../skeletons/SkeletonWrap'

type IBanner = {
  banners: IBanners[]
}

export default function Banner ({ banners }: IBanner) {
  const [selectedProduct, setSelectedProduct] = useState<IBanners>()
  const [isDetailProduct, setIsDetailProduct] = useState<boolean>(false)

  return (
    <section className='banner'>
      {banners.map((banner, key) => (
        <SkeletonWrap key={key} loading={false} variant='rounded' height='160px'>
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

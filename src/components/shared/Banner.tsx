'use client'

import React, { Dispatch, SetStateAction, useState } from 'react'

import DetailProduct from './DetailProduct'

import { IProduct } from '../../utils/types'
import ArticleBanner from '../articles/ArticleBanner'

type IBanner = {
  banners: IProduct[]
}

export default function Banner ({ banners }: IBanner) {
  const [selectedProduct, setSelectedProduct] = useState<IProduct>()
  const [isDetailProduct, setIsDetailProduct] = useState<boolean>(false)

  return (
    <section className='banner'>
      {banners.map((banner, key) => (
        <ArticleBanner
          key={key}
          banner={banner}
          dispatchSelectedProduct={setSelectedProduct}
          dispatchDetailProduct={setIsDetailProduct}
        />
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

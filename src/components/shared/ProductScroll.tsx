'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import { IProduct } from '../../utils/types'

import SkeletonWrap from '../skeletons/SkeletonWrap'
import ArticleProductScroll from '../articles/ArticleProductScroll'
import DetailProduct from './DetailProduct'

type IProductScroll = {
  products: IProduct[]
}

export default function ProductScroll ({ products }: IProductScroll) {
  const [selectedProduct, setSelectedProduct] = useState<IProduct>()
  const [isDetailProduct, setIsDetailProduct] = useState<boolean>(false)
  return (
    <section className='products'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-rows-1'>
          <div className='grid grid-cols-1 gap-4'>
            <div className='flex items-center justify-between '>
              <h2>Productos</h2>
              <Link href='/menu'>Ver más</Link>
            </div>

            <div className='inline-flex overflow-x-scroll not-scroll'>
              <div className='space-x-4 flex'>
                {products.map((product, key) => (
                  <SkeletonWrap
                    key={key}
                    loading={false}
                    variant='rounded'
                    height='32px'
                    width='76px'
                  >
                    <ArticleProductScroll
                      product={product}
                      dispatchSelectedProduct={setSelectedProduct}
                      dispatchDetailProduct={setIsDetailProduct}
                    />
                  </SkeletonWrap>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DetailProduct
        isDetailProduct={isDetailProduct}
        product={selectedProduct}
        dispatchSelectedProduct={setSelectedProduct}
        dispatchDetailProduct={setIsDetailProduct}
      />
    </section>
  )
}

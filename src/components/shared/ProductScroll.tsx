'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import { Product } from '../../utils/types'

import SkeletonWrap from '../skeletons/SkeletonWrap'
import ArticleProductScroll from '../articles/ArticleProductScroll'
import DetailProduct from './DetailProduct'

type IProductScroll = {
  loading: boolean
  products: Product[]
}

export default function ProductScroll ({ loading, products }: IProductScroll) {
  const [selectedProduct, setSelectedProduct] = useState<Product>()
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
                    loading={loading}
                    variant='rounded'
                    height='240px'
                    width='192px'
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

'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import { IProduct } from '../../utils/types'

import SkeletonWrap from '../skeletons/SkeletonWrap'
import ArticleProms from '../articles/ArticleProms'
import DetailProduct from './DetailProduct'

import productData from '../../data/proms.json'

type IPromsScroll = {
  viewMore?: boolean
  title?: string
}

export default function PromsScroll ({ viewMore, title }: IPromsScroll) {
  const [selectedProduct, setSelectedProduct] = useState<IProduct>()
  const [isDetailProduct, setIsDetailProduct] = useState<boolean>(false)

  return (
    <section className='proms'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-rows-1'>
          <div className='grid grid-cols-1 gap-4'>
            <div className='flex items-center justify-between '>
              <h2>{title}</h2>
              {viewMore && <Link href='/promotions'>Ver más</Link>}
            </div>

            <div className='inline-flex overflow-x-scroll not-scroll'>
              <div className='space-x-4 flex'>
                {productData.map((product, key) => (
                  <SkeletonWrap
                    key={key}
                    loading={false}
                    variant='rounded'
                    height='256px'
                    width='128px'
                  >
                    <ArticleProms
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

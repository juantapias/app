'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import { FeaturedProms, Product } from '@/utils/types'

import SkeletonWrap from '../skeletons/SkeletonWrap'
import ArticleProms from '../articles/ArticleProms'
import DetailProduct from './DetailProduct'

type IFeaturedProms = {
  loading: boolean
  proms: FeaturedProms | undefined
}

export default function FeaturedProms ({ loading, proms }: IFeaturedProms) {
  const [selectedProduct, setSelectedProduct] = useState<Product>()
  const [isDetailProduct, setIsDetailProduct] = useState<boolean>(false)

  return (
    <section className='featured-proms'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-rows-1'>
          <div className='grid grid-cols-1 gap-4'>
            <div className='flex items-center justify-between '>
              <h2>Promociones destacadas</h2>
              <Link href='/promotions'>Ver más</Link>
            </div>

            <div className='inline-flex overflow-x-scroll not-scroll'>
              <div className='space-x-4 flex'>
                {proms?.productProms.map((prom, key) => (
                  <SkeletonWrap
                    key={key}
                    loading={loading}
                    variant='rounded'
                    height='128px'
                    width='256px'
                  >
                    <ArticleProms
                      prom={prom}
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

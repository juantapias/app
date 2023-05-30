import React, { useState } from 'react'
import { Product } from '../../utils/types'

import SkeletonWrap from '../skeletons/SkeletonWrap'
import ArticleProduct from '../articles/ArticleProducts'
import DetailProduct from './DetailProduct'
import EmptySearch from './EmptySearch'

type IResultFilter = {
  loading: boolean
  products: Product[]
}

export default function ResultFilter ({ loading, products }: IResultFilter) {
  const [selectedProduct, setSelectedProduct] = useState<Product>()
  const [isDetailProduct, setIsDetailProduct] = useState<boolean>(false)

  return (
    <section className='result-filter'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-rows-1'>
          <div className='grid grid-cols-1 gap-4'>
            {products.length ? (
              products.map((product, key) => (
                <SkeletonWrap
                  key={key}
                  loading={loading}
                  variant='rounded'
                  height='136px'
                >
                  <ArticleProduct
                    product={product}
                    dispatchSelectedProduct={setSelectedProduct}
                    dispatchDetailProduct={setIsDetailProduct}
                  />
                </SkeletonWrap>
              ))
            ) : (
              <EmptySearch />
            )}
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

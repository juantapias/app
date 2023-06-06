import React, { Dispatch, SetStateAction } from 'react'
import { IBanners, Product } from '../../utils/types'

type IArticleProms = {
  prom: Product
  dispatchSelectedProduct: Dispatch<SetStateAction<Product | undefined>>
  dispatchDetailProduct: Dispatch<SetStateAction<boolean>>
}

export default function ArticleProms ({
  prom,
  dispatchSelectedProduct,
  dispatchDetailProduct
}: IArticleProms) {
  const handleSelectedProduct = () => {
    dispatchSelectedProduct(prom)
    dispatchDetailProduct(true)
  }

  return (
    <div
      className='h-32 w-64 rounded-lg flex items-center justify-center bg-white'
      onClick={handleSelectedProduct}
    >
      {prom.name}
    </div>
  )
}

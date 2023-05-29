import React, { Dispatch, SetStateAction } from 'react'
import { IBanners } from '../../utils/types'

type IArticleProms = {
  product: IBanners
  dispatchSelectedProduct: Dispatch<SetStateAction<IBanners | undefined>>
  dispatchDetailProduct: Dispatch<SetStateAction<boolean>>
}

export default function ArticleProms ({
  product,
  dispatchSelectedProduct,
  dispatchDetailProduct
}: IArticleProms) {
  const handleSelectedProduct = () => {
    dispatchSelectedProduct(product)
    dispatchDetailProduct(true)
  }

  return (
    <div
      className='h-32 w-64 rounded-lg flex items-center justify-center bg-white'
      onClick={handleSelectedProduct}
    >
      {product.name}
    </div>
  )
}

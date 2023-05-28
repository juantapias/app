import { IProduct } from '@/utils/types'
import React, { Dispatch, SetStateAction } from 'react'

type IArticleProms = {
  product: IProduct
  dispatchSelectedProduct: Dispatch<SetStateAction<IProduct | undefined>>
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

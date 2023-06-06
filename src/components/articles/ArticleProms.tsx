import React, { Dispatch, SetStateAction } from 'react'
import { Product } from '../../utils/types'

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

  const styleBackground = {
    backgroundImage: `url("${prom.thumbnail?.url}")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%'
  }

  return (
    <div
      style={styleBackground}
      className='h-32 w-64 rounded-lg flex items-center justify-center bg-white'
      onClick={handleSelectedProduct}
    ></div>
  )
}

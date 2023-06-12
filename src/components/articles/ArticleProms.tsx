import React, { Dispatch, SetStateAction } from 'react'
import { Product, ProductProm } from '../../utils/types'

type IArticleProms = {
  prom: ProductProm
  dispatchSelectedProduct: Dispatch<SetStateAction<Product | undefined>>
  dispatchDetailProduct: Dispatch<SetStateAction<boolean>>
}

export default function ArticleProms ({
  prom,
  dispatchSelectedProduct,
  dispatchDetailProduct
}: IArticleProms) {
  console.log('🚀 ~ file: ArticleProms.tsx:15 ~ prom:', prom)
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

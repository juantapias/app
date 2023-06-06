import React, { Dispatch, SetStateAction } from 'react'

import { Product } from '../../utils/types'

type IArticleBanner = {
  banner: Product
  dispatchSelectedProduct: Dispatch<SetStateAction<Product | undefined>>
  dispatchDetailProduct: Dispatch<SetStateAction<boolean>>
}

export default function ArticleBanner ({
  banner,
  dispatchSelectedProduct,
  dispatchDetailProduct
}: IArticleBanner) {
  const handleSelectedProduct = () => {
    dispatchSelectedProduct(banner)
    dispatchDetailProduct(true)
  }

  const styleBackground = {
    backgroundImage: `url("${banner.thumbnail?.url}")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%'
  }

  return (
    <article
      style={styleBackground}
      className='bg-white h-40 flex items-center justify-center'
      onClick={handleSelectedProduct}
    >
      <div>{banner.name}</div>
    </article>
  )
}

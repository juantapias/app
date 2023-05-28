import React, { Dispatch, SetStateAction } from 'react'

import { IProduct } from '../../utils/types'

type IArticleBanner = {
  banner: IProduct
  dispatchSelectedProduct: Dispatch<SetStateAction<IProduct | undefined>>
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
  return (
    <article
      className='bg-white h-40 flex items-center justify-center rounded-lg'
      onClick={handleSelectedProduct}
    >
      <div>{banner.name}</div>
    </article>
  )
}

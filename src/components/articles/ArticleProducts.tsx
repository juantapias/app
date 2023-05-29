'use client'

import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/legacy/image'

import { Product } from '../../utils/types'

import { RiFireFill } from 'react-icons/ri'

import Test from '../../assets/images/test.jpg'

type IArticleProduct = {
  product: Product
  dispatchSelectedProduct: Dispatch<SetStateAction<Product | undefined>>
  dispatchDetailProduct: Dispatch<SetStateAction<boolean>>
}

export default function ArticleProduct ({
  product,
  dispatchSelectedProduct,
  dispatchDetailProduct
}: IArticleProduct) {
  
  const handleSelectedProduct = () => {
    dispatchSelectedProduct(product)
    dispatchDetailProduct(true)
  }

  return (
    <article
      className='bg-white p-4 rounded-xl flex items-center space-x-4'
      onClick={handleSelectedProduct}
    >
      <figure className='w-1/2'>
        <Image
          src={Test}
          alt='prueba'
          layout='responsive'
          className='rounded-lg'
        />
      </figure>
      <div className='w-1/2 space-y-2'>
        <div className='flex items-center space-x-2'>
          <h1 className='font-semibold uppercase leading-none -mb-1'>
            {product.name}
          </h1>
          <RiFireFill size={18} />
        </div>
        <div className='max-h-12 transition-all duration-300 ease-in-out text-ellipsis overflow-hidden'>
          <p className='text-xs'>{`${product.description.substring(
            0,
            50
          )}...`}</p>
        </div>
        <p className='text-xl font-semibold'>${product.price}</p>
      </div>
    </article>
  )
}

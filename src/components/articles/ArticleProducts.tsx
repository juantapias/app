'use client'

import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/legacy/image'

import { Product } from '../../utils/types'

import { IconFlame, IconLeaf } from '@tabler/icons-react'

type IArticleProduct = {
  product: Product
  dispatchSelectedProduct: Dispatch<SetStateAction<Product | undefined>>
  dispatchDetailProduct: Dispatch<SetStateAction<boolean>>
}

export default function ArticleProduct({
  product,
  dispatchSelectedProduct,
  dispatchDetailProduct,
}: IArticleProduct) {
  const handleSelectedProduct = () => {
    dispatchSelectedProduct(product)
    dispatchDetailProduct(true)
  }

  const IconRender = () => {
    switch (product.tags) {
      case 'Picante':
        return <IconFlame size={15} />
      case 'Veggie':
        return <IconLeaf size={15} />
    }
  }

  return (
    <article
      className='bg-white p-4 rounded-xl flex items-center space-x-4'
      onClick={handleSelectedProduct}>
      <figure className='w-1/2'>
        <Image
          src={product?.thumbnail?.url || ''}
          alt={product.name}
          layout='responsive'
          className='rounded-lg max-w-full'
          height={65}
          width={100}
        />
      </figure>
      <div className='w-1/2 space-y-2'>
        <div className='flex items-center space-x-2'>
          <h1 className='font-semibold uppercase leading-none -mb-1'>
            {product.name && product.name.length > 25
              ? `${product.name?.substring(0, 25)}...`
              : product.name}
          </h1>
        </div>
        <div className='max-h-12 transition-all duration-300 ease-in-out text-ellipsis overflow-hidden'>
          <p className='text-xs'>{`${product.description?.substring(
            0,
            40
          )}...`}</p>
        </div>
        <div className='flex items-center justify-between'>
          <p className='text-xl font-semibold leading-none'>${product.price}</p>
          {product.tags?.length && (
            <div className='flex items-center space-x-2'>{IconRender()}</div>
          )}
        </div>
      </div>
    </article>
  )
}

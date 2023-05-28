'use client'

import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/legacy/image'

import { useAppStateContext } from '../../context/AppStateContext'
import { IProduct } from '../../utils/types'
import { classNames } from '../../helpers'

import Test from '../../assets/images/test.jpg'

type IArticleProductScroll = {
  product: IProduct
  dispatchSelectedProduct: Dispatch<SetStateAction<IProduct | undefined>>
  dispatchDetailProduct: Dispatch<SetStateAction<boolean>>
}

export default function ArticleProductScroll ({
  product,
  dispatchSelectedProduct,
  dispatchDetailProduct
,}: IArticleProductScroll) {
  const { inRestaurant } = useAppStateContext()

  const handleSelectedProduct = () => {
    dispatchSelectedProduct(product)
    dispatchDetailProduct(true)
  }

  return (
    <article className={classNames(inRestaurant ? 'h-52' : 'h-60',' w-48 bg-white p-4 rounded-xl flex flex-col items-start justify-between')} onClick={handleSelectedProduct}>
      <figure className='w-full'>
        <Image
          src={Test}
          alt='prueba'
          layout='responsive'
          className='rounded-lg'
        />
      </figure>
      <div className='flex flex-col'>
        <h3 className='font-semibold text-md'>{product.name}</h3>
        <span className='text-red-500 text-lg'>{product.price}</span>
      </div>
      {!inRestaurant && (
        <button className='btn-full justify-around bg-red-200 mx-auto'>
          Agregar
        </button>
      )}
    </article>
  )
}

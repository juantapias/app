import React from 'react'
import Image from 'next/legacy/image'

import Test from '../../assets/images/test.jpg'
import { IProduct } from '@/utils/types'

type IArticleProductScroll = {
  product: IProduct
}

export default function ArticleProductScroll ({
  product
}: IArticleProductScroll) {
  return (
    <article className='h-60 w-48 bg-white p-4 rounded-xl flex flex-col items-start justify-between'>
      <figure className='w-full'>
        <Image
          src={Test}
          alt='prueba'
          layout='responsive'
          className='rounded-lg'
        />
      </figure>
      <div className='flex flex-col'>
        <h3 className="font-semibold text-md">{product.title}</h3>
        <span className="text-red-500 text-lg">{product.price}</span>
      </div>

      <button className='btn-full justify-around bg-red-200 mx-auto'>
        Agregar
      </button>
    </article>
  )
}

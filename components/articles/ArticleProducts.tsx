'use client'

import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/legacy/image'

import { RiFireFill } from 'react-icons/ri'

import Test from '@/assets/images/test.jpg'

type IArticleProduct = {
  dispatchDetailProduct: Dispatch<SetStateAction<boolean>>
}

export default function ArticleProduct ({
  dispatchDetailProduct
}: IArticleProduct) {
  const string =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatibus ipsum at neque molestias soluta, minima officia consequuntur laudantium atque quae dolore error odit rem quo blanditiis illum quaerat reprehenderit. Tempora ipsum quod error voluptas deleniti et tempore laboriosam maxime, nemo sint architecto corrupti illo unde facere velit? Quos possimus nemo excepturi omnis tempora cumque repellendus dicta rem assumenda quisquam?'

  return (
    <article
      className='bg-white p-4 rounded-xl flex items-center space-x-4'
      onClick={() => {
        dispatchDetailProduct(true)
      }}
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
          <h1 className='font-semibold uppercase leading-none -mb-1'>prueba</h1>
          <RiFireFill size={18} />
        </div>
        <div className='max-h-12 transition-all duration-300 ease-in-out text-ellipsis overflow-hidden'>
          <p className='text-xs'>{`${string.substring(0, 50)}...`}</p>
        </div>
        <p className='text-xl font-semibold'>$32.00</p>
      </div>
    </article>
  )
}

'use client'

import React, { Fragment } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { useAppStateContext } from '../../context/AppStateContext'

import { IconBasket, IconChevronLeft } from '@tabler/icons-react'

type IHeader = {
  goBack?: boolean
  title: string
  cartBtn?: boolean
}

export default function Header({ goBack, title, cartBtn }: IHeader) {
  const router = useRouter()
  const { inRestaurant, cart } = useAppStateContext()
  return (
    <header className='py-2 mb-5'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-rows-1'>
          <div className='grid grid-cols-3'>
            {goBack && (
              <button
                className='flex items-center justify-center bg-white rounded-full h-10 w-10 shadow-md float-right'
                onClick={() => router.back()}>
                <IconChevronLeft size={25} />
              </button>
            )}
            <div className={'flex items-center justify-center col-start-2'}>
              <h1 className='text-center capitalize'>{title}</h1>
            </div>
            {!inRestaurant && (
              <Fragment>
                {cart && (
                  <Link
                    href='/cart'
                    className='flex items-center justify-center ml-auto bg-white rounded-full h-10 w-10 shadow-md relative'>
                    {cart.length > 0 && (
                      <span className='absolute right-0 top-0 rounded-full bg-red-400 text-xs h-4 w-4 flex items-center justify-center'>
                        {cart.length}
                      </span>
                    )}
                    <IconBasket size={20} />
                  </Link>
                )}
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

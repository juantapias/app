'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'

import { useAppStateContext } from '@/context/AppStateContext'

import { whatsAppBooking } from '@/helpers'

type IConfirmation = {
  title: string
  description: string
}

export default function Confirmation ({ title, description }: IConfirmation) {
  const { booking } = useAppStateContext()

  useEffect(() => {
    if (booking) {
      whatsAppBooking(booking)
    }
  }, [booking])

  return (
    <section className='confirmation'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-rows-1'>
          <div className='grid grid-cols-1 gap-4'>
            <h1 className='text-center text-xl text-gray-500 font-semibold'>
              {title}
            </h1>
            <p className='text-gray-500 text-base text-center'>{description}</p>
            <Link href='/' className='btn-md mx-auto bg-red-300'>
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

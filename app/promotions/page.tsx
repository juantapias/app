import React, { Fragment } from 'react'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@/components/shared/Header'))
const Proms = dynamic(() => import('@/components/shared/Proms'))

export default function Page () {
  return (
    <Fragment>
      <Header title='Promociones' search />
      <main className='space-y-5'>
        <Proms />
        <Proms />
        <Proms />
        <Proms />
      </main>
    </Fragment>
  )
}

import React, { Fragment } from 'react'
import dynamic from 'next/dynamic'

import Header from '../../components/shared/Header'
import Proms from '../../components/shared/Proms'

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

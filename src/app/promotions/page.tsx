import React, { Fragment } from 'react'
import dynamic from 'next/dynamic'

import Header from '../../components/shared/Header'
import PromsScroll from '../../components/shared/PromsScroll'

export default function Page () {
  return (
    <Fragment>
      <Header title='Promociones' search />
      <main className='space-y-5'>
        <PromsScroll title='Feliz día Mamá' />
        <PromsScroll title='Para compartir' />
        <PromsScroll title='Domingo feliz' />
        <PromsScroll title='Gourmet' />
      </main>
    </Fragment>
  )
}

import React, { Fragment } from 'react'

import Header from '@/components/shared/Header'
import Products from '../../components/shared/Products'

export default function Menu () {
  return (
    <Fragment>
      <Header title='Menú' search />
      <main>
        <Products />
      </main>
    </Fragment>
  )
}

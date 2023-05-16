import React, { Fragment } from 'react'

import Header from '@/components/shared/Header'
import Proms from '@/components/shared/Proms'

export default function Promotions () {
  return (
    <Fragment>
      <Header title='Promociones' search />
      <main>
        <Proms />
      </main>
    </Fragment>
  )
}

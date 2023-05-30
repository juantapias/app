'use client'

import React, { Fragment } from 'react'

import { useAppStateContext } from '@/context/AppStateContext'

import Header from '../../components/shared/Header'
import Summary from '../../components/shared/Summary'

export default function Page () {
  const { cart } = useAppStateContext()
  return (
    <Fragment>
      <Header title='Carrito' goBack />
      <main>
        <Summary products={cart} />
      </main>
    </Fragment>
  )
}

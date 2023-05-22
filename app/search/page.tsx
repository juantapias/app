import React, { Fragment } from 'react'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@/components/shared/Header'))
const SearchForm = dynamic(() => import('@/components/forms/SearchForm'))

export default function Page () {
  return (
    <Fragment>
      <Header title='Buscar' goBack />
      <main>
        <SearchForm />
      </main>
    </Fragment>
  )
}

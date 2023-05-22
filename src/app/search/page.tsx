import React, { Fragment } from 'react'
import dynamic from 'next/dynamic'

import Header from '../../components/shared/Header'
import SearchForm from '../../components/forms/SearchForm'

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

import React, { Fragment } from 'react'
import Header from '@/components/shared/Header'
import SearchForm from '@/components/forms/SearchForm'

export default function Search () {
  return (
    <Fragment>
      <Header title='Buscar' goBack />
      <main>
        <SearchForm />
      </main>
    </Fragment>
  )
}

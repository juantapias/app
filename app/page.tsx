import { Fragment } from 'react'

import Header from '@/components/shared/Header'
import Proms from '@/components/shared/Proms'

export default function Home () {
  return (
    <Fragment>
      <Header title='Inicio' search />
      <main>
        <Proms />
      </main>
    </Fragment>
  )
}

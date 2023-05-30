import React, { Fragment } from 'react'

import Header from '../../components/shared/Header'
import Reservation from '../../components/shared/Reservation'

export default function Page () {
  return (
    <Fragment>
      <Header title='Reservas' cartBtn />
      <main>
        <Reservation />
      </main>
    </Fragment>
  )
}

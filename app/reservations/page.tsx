import React, { Fragment } from 'react'
import Header from '@/components/shared/Header'
import ReservationForm from '@/components/forms/ReservationForm'

export default function Reservation () {
  return (
    <Fragment>
      <Header title='Reservas' search />
      <main>
        <ReservationForm />
      </main>
    </Fragment>
  )
}

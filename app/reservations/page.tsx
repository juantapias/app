import React, { Fragment } from 'react'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@/components/shared/Header'))
const ReservationForm = dynamic(
  () => import('@/components/forms/ReservationForm')
)

export default function Page () {
  
  return (
    <Fragment>
      <Header title='Reservas' search />
      <main>
        <ReservationForm />
      </main>
    </Fragment>
  )
}

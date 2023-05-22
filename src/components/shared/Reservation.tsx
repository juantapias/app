import React from 'react'

import ReservationForm from '../forms/ReservationForm'

export default function Reservation () {
  return (
    <section className='reservation'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-rows-1'>
          <div className='grid grid-cols-1 gap-4'>
            <ReservationForm />
          </div>
        </div>
      </div>
    </section>
  )
}

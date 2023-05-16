import React from 'react'

export default function ReservationForm () {
  return (
    <section className='reservation-form'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-rows-1'>
          <div className='grid grid-cols-1 gap-4'>
            <div className='form-group flex flex-col'>
              <label htmlFor='name'>Nombre</label>
              <input
                type='text'
                id='name'
                className='h-10 outline-none rounded-lg indent-2'
              />
            </div>

            <div>
              <button className='btn-md bg-red-200 mx-auto'>Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

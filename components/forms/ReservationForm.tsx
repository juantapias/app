'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

import { CgSpinner } from 'react-icons/cg'
import Confirmation from '../shared/Confirmation'

export default function ReservationForm () {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  const handleForm = () => {
    setIsLoading(true)

    setTimeout(() => {
      setIsSuccess(true)
    })
  }

  return (
    <section className='reservation-form'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-rows-1'>
          <div className='grid grid-cols-1 gap-4'>
            {!isSuccess ? (
              <form onSubmit={handleForm} className='space-y-4'>
                <div className='form-group flex flex-col'>
                  <label htmlFor='name'>Nombres</label>
                  <input
                    type='text'
                    id='name'
                    className='h-10 outline-none rounded-lg indent-2'
                  />
                </div>

                <div className='form-group flex flex-col'>
                  <label htmlFor='surname'>Apellidos</label>
                  <input
                    type='text'
                    id='surname'
                    className='h-10 outline-none rounded-lg indent-2'
                  />
                </div>

                <div className='form-group flex flex-col'>
                  <label htmlFor='dni'>Cédula</label>
                  <input
                    type='text'
                    id='dni'
                    className='h-10 outline-none rounded-lg indent-2'
                  />
                </div>

                <div className='form-group flex flex-col'>
                  <label htmlFor='phone'>Teléfono</label>
                  <input
                    type='text'
                    id='phone'
                    className='h-10 outline-none rounded-lg indent-2'
                  />
                </div>

                <div className='form-group flex flex-col'>
                  <label htmlFor='mail'>Email</label>
                  <input
                    type='mail'
                    id='mail'
                    className='h-10 outline-none rounded-lg indent-2'
                  />
                </div>

                <div className='form-group flex flex-col'>
                  <label htmlFor='event'>Tipo de evento</label>
                  <select
                    name='event'
                    id='event'
                    defaultValue='default'
                    className='h-10 outline-none rounded-lg indent-2'
                  >
                    <option value='default' disabled>
                      Selecciona
                    </option>
                    <option value='birthday'>Cumpleaños</option>
                    <option value='anniversary'>Aniversario</option>
                    <option value='anniver'>Social</option>
                  </select>
                </div>

                <div className='form-group flex flex-col'>
                  <label htmlFor='people'>Nr. de comensales</label>
                  <select
                    name='people'
                    id='people'
                    defaultValue='default'
                    className='h-10 outline-none rounded-lg indent-2'
                  >
                    <option value='default' disabled>
                      Selecciona
                    </option>
                    <option value=''>+2</option>
                    <option value=''>+5</option>
                    <option value=''>+8</option>
                    <option value=''>+10</option>
                  </select>
                </div>

                <div className='form-group flex flex-col'>
                  <label htmlFor='request'>Peticiones</label>
                  <textarea
                    id='request'
                    className='h-20 outline-none rounded-lg indent-2'
                  />
                </div>

                <div>
                  <button type='submit' className='btn-md bg-red-200 mx-auto'>
                    {!isLoading ? (
                      'Enviar'
                    ) : (
                      <CgSpinner className='animate-spin' size={20} />
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <Confirmation
                title='Reserva exitosa'
                description='Recuerde que nuestro tiempo estimado de espera es de 10 minutos, al minuto 11 su reserva se levantará automáticamente.'
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import React from 'react'
import { useForm } from 'react-hook-form'

import { CgSpinner } from 'react-icons/cg'

type ReservationFormInputs = {
  name: string
  surname: string
  dni: string
  phone: string
  mail: string
  event: string
  people: string
  request: string
}

export default function ReservationForm () {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm<ReservationFormInputs>()

  const handleForm = (data: ReservationFormInputs) => {
    console.log('🚀 ~ file: ReservationForm.tsx:32 ~ handleForm ~ data:', data)
  }

  return (
    <form onSubmit={handleSubmit(handleForm)} className='space-y-4'>
      <div className='form-group flex flex-col'>
        <label htmlFor='name'>Nombres</label>
        <input
          type='text'
          {...register('name', { required: true })}
          id='name'
          className='h-10 outline-none rounded-lg indent-2'
        />
        {errors.name && (
          <p className='text-red-500'>Este campo es obligatorio</p>
        )}
      </div>

      <div className='form-group flex flex-col'>
        <label htmlFor='surname'>Apellidos</label>
        <input
          type='text'
          {...register('surname', { required: true })}
          id='surname'
          className='h-10 outline-none rounded-lg indent-2'
        />
        {errors.surname && (
          <p className='text-red-500'>Este campo es obligatorio</p>
        )}
      </div>

      <div className='form-group flex flex-col'>
        <label htmlFor='dni'>Cédula</label>
        <input
          type='text'
          {...register('dni', { required: true })}
          id='dni'
          className='h-10 outline-none rounded-lg indent-2'
        />
        {errors.dni && (
          <p className='text-red-500'>Este campo es obligatorio</p>
        )}
      </div>

      <div className='form-group flex flex-col'>
        <label htmlFor='phone'>Teléfono</label>
        <input
          type='text'
          {...register('phone')}
          id='phone'
          className='h-10 outline-none rounded-lg indent-2'
        />
        {errors.phone && (
          <p className='text-red-500'>Este campo es obligatorio</p>
        )}
      </div>

      <div className='form-group flex flex-col'>
        <label htmlFor='mail'>Email</label>
        <input
          type='mail'
          {...register('mail', { required: true })}
          id='mail'
          className='h-10 outline-none rounded-lg indent-2'
        />
        {errors.mail && (
          <p className='text-red-500'>Este campo es obligatorio</p>
        )}
      </div>

      <div className='form-group flex flex-col'>
        <label htmlFor='event'>Tipo de evento</label>
        <select
          {...register('event', { required: true })}
          id='event'
          defaultValue=''
          className='h-10 outline-none rounded-lg indent-2'
        >
          <option value='' disabled>
            Selecciona
          </option>
          <option value='birthday'>Cumpleaños</option>
          <option value='anniversary'>Aniversario</option>
          <option value='anniver'>Social</option>
        </select>
        {errors.event && (
          <p className='text-red-500'>Este campo es obligatorio</p>
        )}
      </div>

      <div className='form-group flex flex-col'>
        <label htmlFor='people'>Nr. de comensales</label>
        <select
          {...register('people', { required: true })}
          id='people'
          defaultValue=''
          className='h-10 outline-none rounded-lg indent-2'
        >
          <option value='' disabled>
            Selecciona
          </option>
          <option value='+2'>+2</option>
          <option value='+5'>+5</option>
          <option value='+8'>+8</option>
          <option value='+10'>+10</option>
        </select>
        {errors.people && (
          <p className='text-red-500'>Este campo es obligatorio</p>
        )}
      </div>

      <div className='form-group flex flex-col'>
        <label htmlFor='request'>Peticiones</label>
        <textarea
          {...register('request')}
          id='request'
          className='h-20 outline-none rounded-lg indent-2'
        />
      </div>

      <div>
        <button type='submit' className='btn-md bg-red-200 mx-auto'>
          {!isSubmitting ? (
            'Enviar'
          ) : (
            <CgSpinner className='animate-spin' size={20} />
          )}
        </button>
      </div>
    </form>
  )
}

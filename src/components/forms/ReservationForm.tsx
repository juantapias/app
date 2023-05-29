'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import DatePicker, { registerLocale } from 'react-datepicker'
import es from 'date-fns/locale/es'

import { CgSpinner } from 'react-icons/cg'

registerLocale('es', es)

type ReservationFormInputs = {
  name: string
  surname: string
  dni: string
  phone: string
  mail: string
  event: string
  timeEvent: string
  dateEvent: any
  people: string
  request: string
}

export default function ReservationForm () {
  const router = useRouter()

  const [startDate, setStartDate] = useState<any>()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm<ReservationFormInputs>()

  const handleForm = (data: ReservationFormInputs) => {
    console.log('🚀 ~ file: ReservationForm.tsx:32 ~ handleForm ~ data:', data)
    // router.push('/confirmation')
  }

  const onChangeDate = (date: any) => {
    setStartDate(date)
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
          className='h-10 outline-none rounded-lg indent-2 bg-white'
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
        <label htmlFor='dateEvent'>Día:</label>
        <Controller
          control={control}
          name='dateEvent'
          // rules={{ required: true }}
          render={({ field }) => (
            <DatePicker
              {...field}
              className='h-10 outline-none rounded-lg indent-2 bg-white w-full'
              selected={field.value}
              onChange={date => field.onChange(date)}
              locale={es}
              placeholderText='Selecciona la fecha'
              dateFormat='dd/MM/yyyy'
              isClearable
            />
          )}
        />
      </div>

      <div className='form-group flex flex-col'>
        <label htmlFor='timeEvent'>Hora</label>
        <select
          {...register('timeEvent', { required: true })}
          id='event'
          defaultValue=''
          className='h-10 outline-none rounded-lg indent-2 bg-white'
        >
          <option value='' disabled>
            Selecciona
          </option>
          <option value='12pm'>12pm</option>
          <option value='1pm'>1pm</option>
          <option value='2pm'>2pm</option>
          <option value='3pm'>3pm</option>
          <option value='4pm'>4pm</option>
          <option value='5pm'>5pm</option>
          <option value='6pm'>6pm</option>
          <option value='7pm'>7pm</option>
          <option value='8pm'>8pm</option>
          <option value='9pm'>9pm</option>
          <option value='10pm'>10pm</option>
        </select>
      </div>

      <div className='form-group flex flex-col'>
        <label htmlFor='people'>Nr. de comensales</label>
        <select
          {...register('people', { required: true })}
          id='people'
          defaultValue=''
          className='h-10 outline-none rounded-lg indent-2 bg-white'
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
        ></textarea>
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

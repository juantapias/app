'use client'

import React, {
  Dispatch,
  Fragment,
  MouseEvent,
  SetStateAction,
  useState
} from 'react'
import { useAppStateContext } from '@/context/AppStateContext'

import { RiEBike2Line } from 'react-icons/ri'
import { IoStorefrontOutline } from 'react-icons/io5'

export default function Services () {
  const [services, setServices] = useState<string>('')

  const servicesItem = [
    {
      title: 'Domicilios',
      target: 'delivery',
      icon: <RiEBike2Line size={30} />
    },
    {
      title: 'Retirar en tienda',
      target: 'store',
      icon: <IoStorefrontOutline size={30} />
    }
  ]

  const handleSetServices = (e: MouseEvent<HTMLButtonElement>) => {
    setServices(e.currentTarget.dataset.services || '')
  }
  return (
    <section className='services'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-rows-1'>
          <div className='grid grid-cols-1 gap-4'>
            {services.includes('store') ? (
              <Store dispatchServices={setServices} />
            ) : services.includes('delivery') ? (
              <Delivery dispatchServices={setServices} />
            ) : (
              <Fragment>
                <h1 className='font-semibold text-lg text-center text-gray-500'>
                  ¿Cómo quieres tu pedido?
                </h1>
                <div className='flex items-center justify-center space-x-4'>
                  {servicesItem.map((service, key) => (
                    <button
                      key={key}
                      className='border border-gray-400 text-gray-500 rounded-lg h-20 w-20 flex items-center justify-center'
                      data-services={service.target}
                      onClick={e => handleSetServices(e)}
                    >
                      {service.icon}
                    </button>
                  ))}
                </div>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

type IDelivery = {
  dispatchServices: Dispatch<SetStateAction<string>>
}

const Delivery = ({ dispatchServices }: IDelivery) => {
  const { setIsServices } = useAppStateContext()
  return (
    <div className='space-y-5'>
      <h2>Ingresar dirección</h2>
      <div className='flex flex-col'>
        <label htmlFor='city'>Ciudad</label>
        <select
          id='city'
          className='h-10 outline-none inset-2 border border-gray-400 rounded-full'
          defaultValue=''
        >
          <option value=''>Selecciona</option>
          <option value=''>Bogota</option>
          <option value=''>Medellín</option>
        </select>
      </div>

      <div className='flex flex-col'>
        <label htmlFor='addres'>Dirección</label>
        <input
          type='text'
          id='address'
          placeholder='Ingresa dirección'
          className='h-10 indent-2 border border-gray-400 rounded-full'
        />
      </div>

      <div className='flex items-center justify-center space-x-4'>
        <button
          className='btn-md border border-gray-400'
          onClick={() => {
            dispatchServices('')
          }}
        >
          Volver
        </button>
        <button
          className='btn-md border border-gray-400'
          onClick={() => {
            setIsServices(true)
          }}
        >
          Siguiente
        </button>
      </div>
    </div>
  )
}

type IStore = {
  dispatchServices: Dispatch<SetStateAction<string>>
}

const Store = ({ dispatchServices }: IStore) => {
  const { setIsServices } = useAppStateContext()
  return (
    <div className='space-y-5'>
      <div className='flex flex-col'>
        <label htmlFor='selected-store'>Selecciona tienda</label>
        <select
          id='selected-store'
          defaultValue=''
          className='h-10 outline-none inset-2 border border-gray-400 rounded-full'
        >
          <option value=''>Selecciona</option>
          <option value=''>Laureles (Cq. 4 ##73-04)</option>
          <option value=''>Floresta (Cra. 84 #45d-24)</option>
        </select>
      </div>

      <div className='flex items-center justify-center space-x-4'>
        <button
          className='btn-md border border-gray-400'
          onClick={() => {
            dispatchServices('')
          }}
        >
          Volver
        </button>
        <button
          className='btn-md border border-gray-400'
          onClick={() => {
            setIsServices(true)
          }}
        >
          Siguiente
        </button>
      </div>
    </div>
  )
}

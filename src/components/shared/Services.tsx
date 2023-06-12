'use client'

import React, {
  ChangeEvent,
  Dispatch,
  Fragment,
  MouseEvent,
  SetStateAction,
  useEffect,
  useState
} from 'react'
import { useRouter } from 'next/navigation'

import { useAppStateContext } from '../../context/AppStateContext'

import { MdOutlineDeliveryDining, MdOutlineStorefront } from 'react-icons/md'

type ICacheDeliver = {
  city?: string
  address?: string
}

type ICachePickup = {
  store?: string
  time?: string
}

type TouchValue = {
  city?: boolean
  address?: boolean
  store?: boolean
  time?: boolean
}

export default function Services () {
  const router = useRouter()
  const { setIsServices, setInRestaurant } = useAppStateContext()

  const [services, setServices] = useState<string>('')

  const servicesItem = [
    {
      title: 'Domicilios',
      target: 'delivery',
      icon: <MdOutlineDeliveryDining size={30} />
    },
    {
      title: 'Retirar en tienda',
      target: 'store',
      icon: <MdOutlineStorefront size={30} />
    }
  ]

  const handleSetServices = (e: MouseEvent<HTMLButtonElement>) => {
    setServices(e.currentTarget.dataset.services || '')
  }

  const handleInRestaurant = () => {
    setIsServices(true), setInRestaurant(true)
    router.push('/menu')
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
                      className='border border-gray-400 text-gray-500 rounded-full h-20 w-20 flex items-center justify-center'
                      data-services={service.target}
                      onClick={e => handleSetServices(e)}
                    >
                      {service.icon}
                    </button>
                  ))}
                </div>
                <div className='flex justify-center'>
                  <button
                    className='border border-gray-400 rounded-full text-gray-500 px-4 py-2'
                    onClick={handleInRestaurant}
                  >
                    Estoy en el restaurant
                  </button>
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
  const router = useRouter()
  const { setIsServices } = useAppStateContext()

  const [deliveryAddress, setDeliveryAddress] = useState<ICacheDeliver>({
    city: '',
    address: ''
  })

  const [error, setError] = useState<TouchValue>({
    city: false,
    address: false
  })

  useEffect(() => {
    handleCache()
  }, [deliveryAddress])

  const handleCache = () => {
    const currentDate = new Date()
    const expirationTime = 24 * 60 * 60 * 1000
    const expirationDate = new Date(currentDate.getTime() + expirationTime)

    localStorage.setItem(
      'deliveryAddress',
      JSON.stringify({ delivery: deliveryAddress, expiration: expirationDate })
    )

    const storedData = localStorage.getItem('deliveryAddress')

    if (storedData) {
      const parsedData = JSON.parse(storedData)

      const expirationDate = new Date(parsedData.expiracion)

      const currentDate = new Date()

      if (currentDate > expirationDate) {
        localStorage.removeItem('deliveryAddress')
      }
    }
  }

  const onChangeCity = (e: ChangeEvent<HTMLSelectElement>) => {
    setDeliveryAddress({ ...deliveryAddress, city: e.currentTarget.value })
  }

  const onChangeAddress = (e: ChangeEvent<HTMLInputElement>) => {
    setDeliveryAddress({ ...deliveryAddress, address: e.currentTarget.value })
  }

  const handleStore = () => {
    if (deliveryAddress.city && deliveryAddress.address) {
      setIsServices(true)
      router.push('/')
    }

    if (!deliveryAddress.city) {
      setError({ ...error, city: true })
    }
    if (!deliveryAddress?.address?.length) {
      setError({ ...error, address: true })
    }
  }

  return (
    <div className='space-y-5'>
      <h2 className='text-center font-semibold text-gray-500 uppercase'>
        Ingresar dirección
      </h2>
      <div className='flex flex-col'>
        <label htmlFor='city'>Ciudad</label>
        <select
          id='city'
          className='h-10 outline-none inset-2 border border-gray-400 rounded-full bg-white'
          defaultValue=''
          onChange={e => onChangeCity(e)}
        >
          <option value=''>Selecciona</option>
          <option value='Bogotá'>Bogotá</option>
          <option value='Medellín'>Medellín</option>
        </select>
        {error.city && (
          <p className='text-xs text-red-300'>Campo obligatorio</p>
        )}
      </div>

      <div className='flex flex-col'>
        <label htmlFor='addres'>Dirección</label>
        <input
          type='text'
          id='address'
          placeholder='Ingresa dirección'
          className='h-10 indent-2 border border-gray-400 rounded-full'
          onChange={e => onChangeAddress(e)}
        />
        {error.address && (
          <p className='text-xs text-red-300'>Campo obligatorio</p>
        )}
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
        <button className='btn-md border border-gray-400' onClick={handleStore}>
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
  const router = useRouter()
  const { setIsServices } = useAppStateContext()

  const [pickupStore, setPickupStore] = useState<ICachePickup>({
    store: '',
    time: ''
  })

  const [error, setError] = useState<TouchValue>({
    store: false,
    time: false
  })

  useEffect(() => {
    handleCache()
  }, [pickupStore])

  const handleCache = () => {
    const currentDate = new Date()
    const expirationTime = 4 * 60 * 60 * 1000
    const expirationDate = new Date(currentDate.getTime() + expirationTime)

    localStorage.setItem(
      'pickupStore',
      JSON.stringify({ store: pickupStore, expiration: expirationDate })
    )

    const storedData = localStorage.getItem('pickupStore')

    if (storedData) {
      const parsedData = JSON.parse(storedData)

      const expirationDate = new Date(parsedData.expiracion)

      const currentDate = new Date()

      if (currentDate > expirationDate) {
        localStorage.removeItem('pickupStore')
      }
    }
  }

  const onChangeStore = (e: ChangeEvent<HTMLSelectElement>) => {
    setPickupStore({ ...pickupStore, store: e.currentTarget.value })
  }

  const onChangeTime = (e: ChangeEvent<HTMLSelectElement>) => {
    setPickupStore({ ...pickupStore, time: e.currentTarget.value })
  }

  const handleStore = () => {
    if (pickupStore.store && pickupStore.time) {
      setIsServices(true)
      router.push('/')
    }

    if (!pickupStore?.store?.length) {
      setError({ ...error, store: true })
    }
    if (!pickupStore?.time?.length) {
      setError({ ...error, time: true })
    }
  }

  return (
    <div className='space-y-5'>
      <h2 className='text-center font-semibold text-gray-500 uppercase'>
        Selecciona tu tienda
      </h2>
      <div className='flex flex-col'>
        <label htmlFor='selected-store'>Selecciona tienda</label>
        <select
          id='selected-store'
          defaultValue=''
          className='h-10 outline-none inset-2 border border-gray-400 rounded-full bg-white'
          onChange={e => onChangeStore(e)}
        >
          <option value=''>Selecciona</option>
          <option value='Laureles (Cq. 4 ##73-04)'>
            Laureles (Cq. 4 ##73-04)
          </option>
          <option value='Floresta (Cra. 84 #45d-24)'>
            Floresta (Cra. 84 #45d-24)
          </option>
        </select>
        {error.store && (
          <p className='text-xs text-red-300'>Campo obligatorio</p>
        )}
      </div>

      <div className='flex flex-col'>
        <label htmlFor='selected-time'>Selecciona hora de recogida</label>
        <select
          id='selected-time'
          defaultValue=''
          className='h-10 outline-none inset-2 border border-gray-400 rounded-full bg-white'
          onChange={e => onChangeTime(e)}
        >
          <option value=''>Selecciona</option>
          <option value='12:00 pm'>12:00 pm</option>
          <option value='12:30 pm'>12:30 pm</option>
          <option value='1:00 pm'>1:00 pm</option>
          <option value='1:30 pm'>1:30 pm</option>
          <option value='2:00 pm'>2:00 pm</option>
          <option value='2:30 pm'>2:30 pm</option>
          <option value='3:00 pm'>3:00 pm</option>
          <option value='3:30 pm'>3:30 pm</option>
          <option value='4:00 pm'>4:00 pm</option>
          <option value='4:30 pm'>4:30 pm</option>
          <option value='5:00 pm'>5:00 pm</option>
          <option value='5:30 pm'>5:30 pm</option>
          <option value='6:00 pm'>6:00 pm</option>
          <option value='6:30 pm'>6:30 pm</option>
          <option value='7:00 pm'>7:00 pm</option>
          <option value='7:30 pm'>7:30 pm</option>
          <option value='8:00 pm'>8:00 pm</option>
          <option value='8:30 pm'>8:30 pm</option>
          <option value='9:00 pm'>9:00 pm</option>
          <option value='9:30 pm'>9:30 pm</option>
          <option value='10:00 pm'>10:00 pm</option>
        </select>
        {error.time && (
          <p className='text-xs text-red-300'>Campo obligatorio</p>
        )}
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
        <button className='btn-md border border-gray-400' onClick={handleStore}>
          Siguiente
        </button>
      </div>
    </div>
  )
}

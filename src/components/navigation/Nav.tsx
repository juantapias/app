'use client'

import React, { Fragment, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useAppStateContext } from '../../context/AppStateContext'

import { classNames } from '../../helpers'
import Services from '../shared/Services'

import {
  IconHome2,
  IconToolsKitchen2,
  IconTags,
  IconCalendarPlus,
  IconSearch
} from '@tabler/icons-react'

const menuItem = [
  {
    label: 'Inicio',
    icon: <IconHome2 size={30} />,
    link: '/'
  },
  {
    label: 'Menu',
    icon: <IconToolsKitchen2 size={30} />,
    link: '/menu'
  },
  {
    label: 'Buscar',
    icon: <IconSearch size={30} />,
    link: '/search'
  },
  {
    label: 'Promociones',
    icon: <IconTags size={30} />,
    link: '/promotions'
  },
  {
    label: 'Reservas',
    icon: <IconCalendarPlus size={30} />,
    link: '/reservations'
  }
]

export default function Nav () {
  const pathname = usePathname()

  const { isServices, setIsServices } = useAppStateContext()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Perform localStorage action
      const cacheDelivery = localStorage.getItem('deliveryAddress')
      const cachePickup = localStorage.getItem('pickupStore')

      if (cacheDelivery) {
        const parsedDataDelivery = JSON.parse(cacheDelivery)
        if (parsedDataDelivery.delivery.address) {
          setIsServices(true)
        }
      }

      if (cachePickup) {
        const parsedDataPickup = JSON.parse(cachePickup)
        if (parsedDataPickup.store.store) {
          setIsServices(true)
        }
      }
    }
  }, [])

  return (
    <Fragment>
      {isServices ? (
        <nav className='fixed bottom-0 bg-white rounded-t-3xl px-4 w-full'>
          <div className='grid grid-rows-1'>
            <div className='grid grid-cols-5'>
              {menuItem.map((menu, key) => (
                <Link
                  key={key}
                  href={menu.link}
                  className={classNames(
                    pathname === menu.link
                      ? 'text-red-400 -translate-y-5'
                      : 'text-black',
                    'flex flex-col items-center justify-center bg-white rounded-full text-xs py-2 transition ease-in-out duration-200 hover:text-red-400'
                  )}
                >
                  {menu.icon}
                  {pathname === menu.link && menu.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      ) : (
        <Services />
      )}
    </Fragment>
  )
}
function useCache (): { cacheAddress: any } {
  throw new Error('Function not implemented.')
}

'use client'

import React, { Fragment } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useAppStateContext } from '../../context/AppStateContext'

import { classNames } from '../../helpers'
import Services from '../shared/Services'

import {
  MdHome,
  MdRestaurantMenu,
  MdLocalOffer,
  MdRoomService,
  MdSearch
} from 'react-icons/md'

const menuItem = [
  {
    label: 'Inicio',
    icon: <MdHome size={30} />,
    link: '/'
  },
  {
    label: 'Menu',
    icon: <MdRestaurantMenu size={30} />,
    link: '/menu'
  },
  {
    label: 'Buscar',
    icon: <MdSearch size={30} />,
    link: '/search'
  },
  {
    label: 'Promociones',
    icon: <MdLocalOffer size={30} />,
    link: '/promotions'
  },
  {
    label: 'Reservas',
    icon: <MdRoomService size={30} />,
    link: '/reservations'
  }
]

export default function Nav () {
  const pathname = usePathname()

  const { isServices } = useAppStateContext()

  return (
    <Fragment>
      {isServices ? (
        <nav className='fixed bottom-0 bg-white rounded-t-3xl px-4 w-full z-10'>
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

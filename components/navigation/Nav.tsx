'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {
  MdHome,
  MdRestaurantMenu,
  MdLocalOffer,
  MdRoomService
} from 'react-icons/md'
import { classNames } from '@/helpers'

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

  return (
    <nav className='fixed bottom-0 bg-white rounded-t-3xl p-4 w-full'>
      <div className='grid grid-rows-1'>
        <div className='grid grid-cols-4'>
          {menuItem.map((menu, key) => (
            <Link
              key={key}
              href={menu.link}
              className={classNames(
                pathname === menu.link ? 'text-red-400' : 'text-black',
                'flex flex-col items-center text-xs transition ease-in-out duration-200 hover:text-red-400'
              )}
            >
              {menu.icon}
              {menu.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

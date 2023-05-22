import React from 'react'
import Link from 'next/link'

import { FaInstagram } from 'react-icons/fa'

import SocialData from '../../data/social.json'

export default function Social () {
  const socialMatch = (social: string) => {
    switch (social) {
      case 'Instagram':
        return <FaInstagram size={30} />
    }
  }
  return (
    <section className='social'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-rows-1'>
          <div className='grid grid-cols-1 gap-2'>
            <h2 className='text-center font-semibold text-lg'>Siguenos</h2>
            <ul className='flex items-center justify-center space-x-6'>
              {SocialData.map((social, key) => (
                <li
                  key={key}
                  className='flex items-center justify-center bg-red-200 h-14 w-14 rounded-full'
                >
                  <Link href={social.link} passHref legacyBehavior>
                    <a target='_blank'>{socialMatch(social.social)}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

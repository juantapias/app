import React from 'react'
import { MdChevronLeft, MdSearch } from 'react-icons/md'

type IHeader = {
  goBack?: boolean
  title: string
  search?: boolean
}

export default function Header ({ goBack, title, search }: IHeader) {
  return (
    <header className='py-2 mb-5'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-rows-1'>
          <div className='grid grid-cols-3'>
            {goBack && (
              <button className='flex items-center justify-center bg-white rounded-full h-10 w-10 shadow-md float-right'>
                <MdChevronLeft size={25} />
              </button>
            )}
            <div className={'flex items-center justify-center col-start-2'}>
              <h1 className='text-center'>{title}</h1>
            </div>
            {search && (
              <button className='flex items-center justify-center ml-auto bg-white rounded-full h-10 w-10 shadow-md'>
                <MdSearch size={25} />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

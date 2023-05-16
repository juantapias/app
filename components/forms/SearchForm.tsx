import React from 'react'

export default function SearchForm () {
  return (
    <section className='search'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-rows-1'>
          <div className='grid grid-cols-1 gap-4'>
            <input
              type='text'
              placeholder='Buscar...'
              className='h-10 rounded-lg indent-2 outline-none'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

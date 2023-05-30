import React from 'react'

export default function EmptySearch () {
  return (
    <section className='empty-search'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-rows-1'>
          <div className='grid grid-cols-1 gap-4'>
            <p className='text-gray-400 text-center'>No se encuentran resultados relacionados a tu búsqueda</p>
          </div>
        </div>
      </div>
    </section>
  )
}

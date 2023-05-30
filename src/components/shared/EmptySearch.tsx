import React from 'react'

type IEmptySearch = {
  title: string
}
export default function EmptySearch ({title}: IEmptySearch) {
  return (
    <section className='empty-search'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-rows-1'>
          <div className='grid grid-cols-1 gap-4'>
            <p className='text-gray-400 text-center'>{title}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

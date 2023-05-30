import React, { Dispatch, SetStateAction } from 'react'

type ISearchForm = {
  dispatchQueryFilter: Dispatch<SetStateAction<string>>
}

export default function SearchForm ({ dispatchQueryFilter }: ISearchForm) {
  return (
    <section className='search'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-rows-1'>
          <div className='grid grid-cols-1 gap-4'>
            <input
              type='text'
              placeholder='Buscar...'
              className='h-10 rounded-lg indent-2 outline-none'
              onChange={e => {
                dispatchQueryFilter(e.currentTarget.value)
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

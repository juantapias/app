import React from 'react'

type IConfirmation = {
  title: string
  description: string
}

export default function Confirmation ({ title, description }: IConfirmation) {
  return (
    <section className='confirmation'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-rows-1'>
          <div className='grid-cols-1 gap-4'>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

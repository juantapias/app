import React from 'react'

export default function Author () {
  return (
    <section className='author'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-rows-1'>
          <div className='grid grid-cols-1'>
            <p className='text-xs text-center'>
              Desarrollado por{' '}
              <a
                href='mailto:dev.juantapias@gmail.com'
                target='_blank'
                className='uppercase text-red-400'
              >
                Saipat
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'

export default function Categories () {
  return (
    <section className='categories'>
      <div className='container mx-auto'>
        <div className='grid grid-rows-1'>
          <div className='grid grid-cols-1'>
            <div className='flex items-center justify-between'>
              <h2>Categorias</h2>
              <button>Ver más</button>
            </div>

            <div className="space-x-4 flex overflow-x-scroll not-scroll">
              {Array.from(new Array(10)).map((_, key) => (
                <button key={key} className="btn-category">category</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import Link from 'next/link'

import SkeletonWrap from '../../components/skeletons/SkeletonWrap'

import { Category } from '../../utils/types'

type Categoies = {
  loading: boolean
  categories: Category[]
}

export default function CategoriesScroll ({ loading, categories }: Categoies) {
  return (
    <section className='categories'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-rows-1'>
          <div className='grid grid-cols-1 gap-4'>
            <div className='flex items-center justify-between '>
              <h2>Categorías</h2>
              <Link href='/menu/category'>Ver más</Link>
            </div>

            <div className='inline-flex overflow-x-scroll not-scroll'>
              <div className='space-x-4 flex'>
                {categories.map((category, key) => (
                  <SkeletonWrap
                    key={key}
                    loading={loading}
                    variant='rounded'
                    height='32px'
                    width='76px'
                  >
                    <div className='flex flex-col items-center space-y-2'>
                      <button key={key} className='btn-category'>
                        {category.icon ? (
                          <img
                            src={category.icon.url}
                            alt={category.icon.fileName}
                            className='max-w-full object-contain h-10 w-10'
                          />
                        ) : (
                          'icon'
                        )}
                      </button>
                      <span className='text-xs'>
                        {category.name.length > 9
                          ? `${category.name.substring(0, 9)}...`
                          : category.name}
                      </span>
                    </div>
                  </SkeletonWrap>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

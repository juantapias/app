import React from 'react'
import Link from 'next/link'

import SkeletonWrap from '@/components/skeletons/SkeletonWrap'

import { ICategories } from '@/utils/types'

type Categoies = {
  categories: ICategories[]
}

export default function CategoriesScroll ({ categories }: Categoies) {
  return (
    <section className='categories'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-rows-1'>
          <div className='grid grid-cols-1'>
            <div className='flex items-center justify-between'>
              <h2>Categorías</h2>
              <Link href='/menu/category'>Ver más</Link>
            </div>

            <div className='space-x-4 flex overflow-x-scroll not-scroll'>
              {categories.map((category, key) => (
                <SkeletonWrap
                  loading={false}
                  variant='rounded'
                  height='32px'
                  width='76px'
                >
                  <button key={key} className='btn-category'>
                    {category.title}
                  </button>
                </SkeletonWrap>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

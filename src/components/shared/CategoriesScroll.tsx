import React, { Dispatch, SetStateAction } from 'react'
import Link from 'next/link'

import SkeletonWrap from '../../components/skeletons/SkeletonWrap'

import { Category } from '../../utils/types'
import { classNames } from '@/helpers'

type Categoies = {
  loading: boolean
  categories: Category[]
  filterCategory: string | undefined
  dispatchFilterCategory: Dispatch<SetStateAction<string | undefined>>
}

export default function CategoriesScroll ({
  loading,
  categories,
  filterCategory,
  dispatchFilterCategory
}: Categoies) {
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
                      <button
                        key={key}
                        className={classNames(
                          filterCategory === category.name &&
                            'border-2 border-red-400',
                          'btn-category'
                        )}
                        onClick={() => {
                          dispatchFilterCategory(filterCategory !== category.name ? category.name : '')
                        }}
                      >
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
                        {category.name && category?.name.length > 9
                          ? `${category?.name.substring(0, 9)}...`
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
